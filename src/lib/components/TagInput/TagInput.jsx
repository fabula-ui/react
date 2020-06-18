import React, { useEffect, useState, useCallback } from 'react';
import { css } from 'emotion';

// Components
import Tag from '../Tag/Tag';

// Styles
import InputStyles from '@fabula/core/theme/styles/Input';
import TagInputStyles from '@fabula/core/theme/styles/TagInput';
import TagGroup from '../TagGroup/TagGroup';

const TagInput = props => {
    const { className, placeholder, tagColor } = props;
    const [currentTag, setCurrentTag] = useState('');
    const [focus, setFocus] = useState(false);
    const [inputStatus, setInputStatus] = useState('clear');
    const [items, setItems] = useState(<></>);
    const [tags, setTags] = useState([]);
    const inputCss = css(InputStyles({ framework: 'react', props }));
    const tagInputCss = css(TagInputStyles({ framework: 'react', props }));
    const classes = ['fab-tag-input-wrapper', className || '', inputCss, tagInputCss];

    const tagsCallback = useCallback(() => {
        const items = tags.map((tag, i) => <Tag color={tagColor} key={i}><span>{tag}</span></Tag>);

        setItems(items);
    }, [tags]);

    useEffect(() => {
        if (props.tags) {
            setTags(props.tags);
        }
    }, [props.tags]);

    useEffect(() => {
        tagsCallback();
    }, [tags]);

    const addTag = tag => {
        const tempTags = [...tags];

        tempTags.push(tag);

        setCurrentTag('');
        setInputStatus('clear');
        setTags(tempTags);
    }

    const handleChange = e => {
        setCurrentTag(e.target.value);
        setInputStatus('dirty');
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            addTag(currentTag);
        } else if (!currentTag && e.keyCode === 8) {
            if (inputStatus === 'clear') {
                removeLastTag();
            } else {
                setInputStatus('clear');
            }
        }
    }

    const removeLastTag = () => {
        const tempTags = [...tags];

        tempTags.pop();

        setTags(tempTags);
    }

    return (
        <div className={classes.join(' ')}>
            <div className="fab-tag-input fab-input" data-focus={focus}>
                <div className="fab-tag-input__stage">
                    {items}
                    <div className="fab-tag-input__field-wrapper">
                        <input className="fab-input__field fab-tag-input__field" onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} onChange={handleChange} onKeyUp={handleKeypress} placeholder={placeholder || 'Type something...'} value={currentTag} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagInput;
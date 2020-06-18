import React, { useEffect, useState, useCallback, useRef } from 'react';
import { css } from 'emotion';

// Components
import Tag from '../Tag/Tag';

// Styles
import InputStyles from '@fabula/core/theme/styles/Input';
import TagInputStyles from '@fabula/core/theme/styles/TagInput';
import TagGroup from '../TagGroup/TagGroup';

const TagInput = props => {
    const { className, icon, tagColor } = props;
    const [currentTag, setCurrentTag] = useState('');
    const [focus, setFocus] = useState(false);
    const [inputStatus, setInputStatus] = useState('clean');
    const [items, setItems] = useState(<></>);
    const [tags, setTags] = useState([]);
    const inputRef = useRef(null);
    const ref = useRef(null);
    const placeholder = props.placeholder || 'Type something...';
    const inputCss = css(InputStyles({ framework: 'react', props }));
    const tagInputCss = css(TagInputStyles({ framework: 'react', props: { ...props, placeholder } }));
    const classes = ['fab-tag-input-wrapper', className || '', inputCss, tagInputCss];

    // Dynamic requires
    const Icon = icon ? require('../Icon/Icon').default : null;

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

        inputRef.current.innerHTML = '';
        setCurrentTag('');
        setInputStatus('clean');
        setTags(tempTags);
    }

    const handleChange = () => {
        setCurrentTag(inputRef.current.innerText);
        setInputStatus('dirty');
    }

    const handleFocus = e => {
        e.stopPropagation();

        if (inputStatus === 'clean') {
            inputRef.current.innerHTML = '';
        }


        setFocus(true);
    }

    const handleParentFocus = () => {
        if (!focus) { inputRef.current.focus(); }
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            addTag(currentTag);
        } else if (!currentTag && e.keyCode === 8) {
            if (inputStatus === 'clean') {
                removeLastTag();
            } else {
                setInputStatus('clean');
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
            <div className="fab-tag-input fab-input" data-focus={focus} onClick={handleParentFocus}>
                <div className="fab-tag-input__stage">
                    {!!icon && typeof icon === 'object' && <Icon {...icon} />}
                    {!!icon && typeof icon === 'string' && <Icon name={icon} />}
                    {items}
                    <div className="fab-tag-input__fake-input" contentEditable={true} data-show-placeholder={inputStatus === 'clean'} onBlur={() => setFocus(false)} onFocus={handleFocus} onInput={handleChange} onKeyUp={handleKeypress} ref={inputRef} style={{ position: 'relative' }} suppressContentEditableWarning={true}></div>
                    <div className="fab-tag-input__click-area"><wbr /></div>
                </div>
            </div>
        </div>
    )
}

export default TagInput;
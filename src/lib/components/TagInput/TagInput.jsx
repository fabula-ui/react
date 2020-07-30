import React, { useEffect, useState, useCallback, useRef } from 'react';
import { css } from 'emotion';

// Components
import Component from '../Component/Component';
import Tag from '../Tag/Tag';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';
import TagInputStyles from '@fabula/core/styles/components/tag-input/tag-input';

const TagInput = props => {
    const { icon, tagColor } = props;
    // State vars
    const [currentTag, setCurrentTag] = useState('');
    const [focus, setFocus] = useState(false);
    const [inputStatus, setInputStatus] = useState('clean');
    const [items, setItems] = useState(<></>);
    const [tags, setTags] = useState([]);
    // Refs
    const elRef = useRef(null);
    const inputRef = useRef(null);
    // Vars
    const placeholder = props.placeholder || 'Type something...';
    // CSS
    const inputCss = css(InputStyles({ framework: 'react', props }));

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
        <Component
            elRef={elRef}
            otherStyles={[inputCss]}
            properties={{ ...props, placeholder }}
            styles={TagInputStyles}
            wrapper="fab-tag-input-wrapper">
            <div ref={elRef}>
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
        </Component>
    )
}

export default TagInput;
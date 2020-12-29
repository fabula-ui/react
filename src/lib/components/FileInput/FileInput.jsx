import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from 'emotion';

// Components
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import DropdownItem from '../DropdownItem/DropdownItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Icon } from '../Icon/Icon';
import Tag from '../Tag/Tag';

// Styles
import FileInputStyles from '@fabula/core/styles/components/file-input/file-input';
import InputStyles from '@fabula/core/styles/components/input/input';

const FileInput = props => {
    const { className, onChange } = props;
    const [fileListIsOpen, setFileListIsOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const [focus, setFocus] = useState(false);

    const ref = useRef(null);
    const inputRef = useRef(null);

    // CSS
    const inputCss = css(InputStyles({ framework: 'react', props }));
    const tagInputCss = css(FileInputStyles({ framework: 'react', props }));
    const classes = ['fab-file-input-wrapper', className || '', inputCss, tagInputCss];

    // Callbacks
    const handleClose = useCallback(e => {
        if (ref.current && !ref.current.contains(e.target) && fileListIsOpen) {
            toggleList(false);
        }
    }, [fileListIsOpen, ref]);

    // Hooks
    useEffect(() => {
        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [handleClose]);

    // Methods
    const handleChange = e => {
        const files = handleFiles(e.target.files);

        if (onChange) {
            onChange({
                files: handleFiles(files)
            });
        }

        setFiles(files);
    }

    const handleClick = e => {
        inputRef.current.click();
    }

    const handleFiles = files => {
        const result = [];

        for (let file of files) {
            result.push({
                ...file,
                data: file,
                name: file.name,
                preview: {
                    type: 'image',
                    url: URL.createObjectURL(file)
                }
            })
        }

        return result;
    }

    const handleInputClick = () => {
        if (!fileListIsOpen && !!files.length) {
            toggleList(true);
        } else if (fileListIsOpen) {
            toggleList(false);
        }
    }

    const handleRemove = index => {
        const tempFiles = [...files];

        tempFiles.splice(index, 1);

        setFiles(tempFiles);
    }

    const toggleList = value => {
        setFileListIsOpen(value);
        setFocus(value);
    }

    return (
        <div className={classes.join(' ')} data-fab-wrapper="file-input" ref={ref}>
            <div className="fab-file-input fab-input" data-file-list-is-open={fileListIsOpen} data-focus={!!files.length && focus} data-has-files={!!files.length}>
                <div className="fab-file-input__icon">
                    <Icon name="file"></Icon>
                    {!!files.length && <Badge color="primary" circle={true}>{files.length}</Badge>}
                </div>
                <div className="fab-file-input__stage fab-input__field" onClick={handleInputClick}>
                    {!files.length && <span className="fab-file-input__placeholder">Select file...</span>}
                    {!!files.length && <FileStage files={files} />}
                </div>
                <div className="fab-input__elements">
                    <input onChange={handleChange} multiple={true} ref={inputRef} type="file" />
                    {!files.length && <Button color="primary" onClick={handleClick} smashed={true}>Select File</Button>}
                    {!!files.length && <Icon name="chevron-down" onClick={handleInputClick} />}
                </div>

                <FileList files={files} open={fileListIsOpen} onRemove={handleRemove} />
            </div>
        </div>
    )
}

const FileList = props => {
    const { files, onRemove, open } = props;
    const [items, setItems] = useState(<></>);

    // Callbacks
    const handleItems = useCallback(() => {
        const items = files.map((file, i) => <FileListItem file={file} key={i} onRemove={() => onRemove(i)} />);

        setItems(items);
    }, [files, onRemove]);

    // Hooks
    useEffect(() => {
        handleItems();
    }, [files, handleItems]);

    return (
        <DropdownMenu clickToClose={true} open={open}>
            {items}
        </DropdownMenu>
    )
}

const FileListItem = props => {
    const { file, onRemove } = props;

    return (
        <DropdownItem>
            <Avatar color="aux" image={file.preview?.url} size="xs" />
            <span>{file.name}</span>
            <Button clear={true} compact={true} onClick={onRemove}>
                <Icon name="x" />
            </Button>
        </DropdownItem>
    )
}

const FileTag = props => {
    const { file } = props;

    return (
        <Tag>
            <Avatar adaptColor={true} color="light" image={file.preview?.url} />
            <span>{file.name}</span>
            <Icon name="x" />
        </Tag>
    )
}

const FileStage = props => {
    const { files } = props;
    const [items, setItems] = useState(<></>);

    // Callbacks
    const handleItems = useCallback(files => {
        const items = files.map((file, i) => <FileTag file={file} key={i} />);
        setItems(items);
    }, []);

    // Hooks
    useEffect(() => {
        handleItems(files);
    }, [files, handleItems]);

    return (
        <div className="fab-file-input__stage">
            {items}
        </div>
    )
}

export default FileInput;
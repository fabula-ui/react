import React, { useContext, useState, useEffect, useRef } from 'react';
import { css } from 'emotion';

// Components
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Tag from '../Tag/Tag';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import FileInputStyles from '@fabula/core/theme/styles/FileInput';

const FileInput = props => {
    const { onChange, multiple } = props;
    const { utils } = useContext(FabulaProviderContext);
    const [files, setFiles] = useState([]);
    const [focus, setFocus] = useState(false);
    let fileInput;

    // Methods
    const handleChange = e => {
        const files = handleFiles(e.target.files);

        if (onChange) {
            onChange({
                files: handleFiles(files)
            });
        }

        setFiles(files);
        // setFocus(false);
    }

    const handleClick = () => {
        fileInput.click();
        // setFocus(true);
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

    return (
        <div className={`fab-file-input-wrapper ${css(FileInputStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="file-input">
            <div className="fab-file-input">
                <div className="fab-file-input__field fab-input" data-focus={focus}>
                    <div className="fab-file-input__icon">
                        <Icon name="file"></Icon>
                        <Badge color="primary" rounded={true}>{files.length}</Badge>
                    </div>

                    {/* <FileStage files={files} /> */}
                    {!files.length && <span className="fab-file-input__placeholder">Select file...</span>}
                    {!!files.length && <FileStage files={files} />}
                    <div className="fab-file-input__button">
                        <input onChange={handleChange} multiple={true} ref={input => fileInput = input} type="file" />
                        <Button color="primary" onClick={handleClick} smashed={true}>Select File</Button>
                    </div>

                    <Button color="aux" compact={true} smashed={true}>
                        <Icon name="trash"></Icon>
                    </Button>
                </div>

                <div className="fab-file-input__list">
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

const FileTag = props => {
    const { file } = props;

    return (
        <div className="fab-file-input__tag">
            <Tag>
                <Avatar adaptColor={true} image={file.preview?.url} />
                <span>{file.name}</span>
                <Icon name="x" />
            </Tag>
        </div>
    )
}

const FileStage = props => {
    const { files } = props;
    const items = files.map((file, i) => <FileTag file={file} key={i} />)

    const renderFiles = () => {
        return files.map((file, i) => <FileTag file={file} key={i} />)
    }

    return (
        <div className="fab-file-input__stage">
            {renderFiles()}
        </div>
    )
}

export default FileInput;
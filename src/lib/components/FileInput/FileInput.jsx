import React, { useContext, useState } from 'react';
import { css } from 'emotion';

// Components
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import FileInputStyles from '@fabula/core/theme/styles/FileInput';

const FileInput = props => {
    const { onChange, multiple, utils } = useContext(FabulaProviderContext);
    const [files, setFiles] = useState([]);
    const [focus, setFocus] = useState(false);
    let fileInput;

    // Methods
    const handleChange = e => {
        const files = handleFiles(e.target.files);

        // if (onChange) {
        //     onChange({
        //         context: 'add',
        //         files: handleFiles(files)
        //     });
        // }

        setFiles(files);
        setFocus(false);
    }

    const handleClick = () => {
        fileInput.click();
        setFocus(true);
    }

    const handleFiles = files => {
        const result = [];

        for (let file of files) {
            result.push({
                ...file,
                blob: file,
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
                    <Icon name="file">
                        <Badge></Badge>
                    </Icon>

                    <span className="fab-file-input__placeholder">Select file...</span>
                    <div className="fab-file-input__button">
                        <input onChange={handleChange} multiple={multiple} ref={input => fileInput = input} type="file" />
                        <Button color="primary" onClick={handleClick} smashed={true}>Select File</Button>
                    </div>
                </div>

                <div className="fab-file-input__list">

                </div>
            </div>
        </div>
    )
}

export default FileInput;
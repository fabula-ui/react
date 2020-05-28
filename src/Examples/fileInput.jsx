import React from 'react';
import { FileInput } from '@fabula/react-dev';

import Example from '../components/Example/Example';

const FileInputExample = props => {
    return (
        <Example title="File Input" visible={true}>
            <FileInput />
        </Example>
    );
}

export default FileInputExample;
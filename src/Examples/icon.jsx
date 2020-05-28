import React from 'react';
import { Icon } from '@fabula/react-dev';

import Example from '../components/Example/Example';

const IconExample = props => {
    return (
        <Example title="Icon">
            <Icon color="primary" name="bell" />
        </Example>
    );
}

export default IconExample;
import React from 'react';
import { useState } from 'react';

import './Example.css';

const Example = props => {
    const { children, title } = props;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div className="example">
            <h1 onClick={handleClick}>
                {visible ? '- ' : '+ '}
                {title}
            </h1>
            <div className="example-children" data-visible={visible}>
                {children}
            </div>
        </div>
    )
}

export default Example;
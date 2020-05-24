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
            {visible && children}
        </div>
    )
}

export default Example;
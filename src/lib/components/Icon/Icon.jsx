import React, { useContext, useRef, useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

const Icon = props => {
    const { children, className, name, utils } = props;
    const [appended, setAppended] = useState(false);
    const iconRef = useRef(null);
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    let svg;

    useEffect(() => {
        if (iconRef.current && svgRef.current && wrapperRef.current) {
            svgRef.current.addEventListener('load', () => {
                const svgDocument = svgRef.current.contentDocument;
                const svg = svgDocument.querySelector('svg');
                
                iconRef.current.appendChild(svg);

                svg.style.color = 'inherit';
                setAppended(true);
            });
        }
    }, [iconRef, svgRef, wrapperRef]);

    try {
        svg = require(`@fabula/core/icons/${name}.svg`);
    } catch (err) {
        svg = null;
    }

    if (svg) {
        return (
            <span className={`${className} fab-icon ${css(IconStyles({ framework: 'react', props, utils }))}`} ref={wrapperRef}>
                <i className="fab-icon__svg" ref={iconRef} />
                {!appended && <object className="fab-icon__object" xmlns="http://www.w3.org/2000/svg" data={svg} type="image/svg+xml" ref={svgRef}>Unsupported by browser</object>}
                {children}
            </span>
        );
    } else {
        return <></>
    }
}

export default Icon;
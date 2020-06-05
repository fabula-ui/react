import React, { useContext, useRef, useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

const Icon = props => {
    const { children, className, color, name, ...rest } = props;
    const [appended, setAppended] = useState(false);
    const [currentSvg, setCurrentSvg] = useState();
    const [svg, setSvg] = useState(null);
    const iconClass = className || '';
    const iconRef = useRef(null);
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        let svg;

        if (name) {  
            setAppended(false);

            try {
                svg = require(`@fabula/core/icons/${name}.svg`);
            } catch (err) {
                svg = null;
            }

            setSvg(svg);
        }
    }, [name]);

    useEffect(() => {
        if (iconRef.current && svg && !appended && svgRef.current && wrapperRef.current) {
            svgRef.current.addEventListener('load', () => {
                const svgDocument = svgRef.current.contentDocument;
                const svgObject = svgDocument.querySelector('svg');

                
                iconRef.current.innerHTML = '';
                iconRef.current.appendChild(svgObject);

                svgObject.style.color = 'inherit';

                setAppended(true);
                setCurrentSvg(svg);
            });
        }
    }, [currentSvg, iconRef, svg, svgRef, wrapperRef]);

    if (svg) {
        return (
            <span className={`fab-icon ${css(IconStyles({ framework: 'react', props }))} ${iconClass}`} data-color={color} data-name={name} ref={wrapperRef} {...rest}>
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
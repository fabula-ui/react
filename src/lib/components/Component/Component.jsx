import { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { css } from 'emotion';

// Context
import { ResponsiveProviderContext } from '../../providers/ResponsiveProvider';
import { UtilsProviderContext } from '../../providers/UtilsProvider';

const events = [
    { event: 'onMouseEnter', name: 'mouseenter' },
    { event: 'onMouseLeave', name: 'mouseleave' },
    { event: 'onMouseOut', name: 'mouseout' },
    { event: 'onMouseOver', name: 'mouseover' },
    { event: 'onClick', name: 'click' }
]

const Component = props => {
    const { children, classes, elRef, otherStyles, properties, rest, styles, wrapper } = props;
    const [started, setStarted] = useState(false);
    const responsiveContext = useContext(ResponsiveProviderContext);
    const utilsContext = useContext(UtilsProviderContext);

    // Callbacks
    const handleEvents = useCallback(rest => {
        for (let i = 0; i < events.length; i++) {
            const { event, name } = events[i];
            if (rest[event]) { elRef.current.removeEventListener(name, rest[event]); elRef.current.addEventListener(name, rest[event]); }
        }

        setStarted(true);
    }, [elRef]);

    const handleStyles = useCallback(properties => {
        let responsiveStyles;
        let utilsStyles;

        if (elRef?.current) {
            elRef.current.className = '';

            if (classes?.length) {
                for (let i = 0; i < classes.length; i++) {
                    elRef.current.classList.add(classes[i]);
                }
            }

            if (otherStyles?.length) {
                for (let i = 0; i < otherStyles.length; i++) {
                    elRef.current.classList.add(css(otherStyles[i]));
                }
            }

            if (properties.className && typeof properties.className === 'string') {
                for (let i = 0; i < properties.className.split(' ').length; i++) {
                    const className = properties.className.split(' ')[i];

                    if (className) { elRef.current.classList.add(className); }
                }
            }

            if (wrapper) { elRef.current.classList.add(wrapper); }
            if (styles) { elRef.current.classList.add(css(styles({ framework: 'react', props: properties }))); }

            if (utilsContext?.added) {
                utilsStyles = require('@fabula/core/styles/utils/utils').default({ framework: 'react', props: properties });
                elRef.current.classList.add(css(utilsStyles));
            }

            if (responsiveContext?.added) {
                responsiveStyles = require('@fabula/core/styles/responsive/responsive').default({ framework: 'react', props: properties, styles, utils: utilsContext?.added });
                elRef.current.classList.add(css(responsiveStyles));
            }

        }
    }, [classes, elRef, otherStyles, responsiveContext, styles, utilsContext, wrapper]);

    // Hooks
    useLayoutEffect(() => {
        if (elRef?.current) {
            if (rest && !started) { handleEvents(rest); }
            handleStyles(properties);
        }
    }, [elRef, handleEvents, handleStyles, properties, rest, started]);

    return children;
}

export default Component
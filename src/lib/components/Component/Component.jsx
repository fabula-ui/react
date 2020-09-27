import { useCallback, useContext, useLayoutEffect } from 'react';
import { css } from 'emotion';

// Context
import { ResponsiveProviderContext } from '../../providers/ResponsiveProvider';
import { UtilsProviderContext } from '../../providers/UtilsProvider';

const Component = props => {
    const { children, classes, elRef, otherStyles, properties, styles, wrapper } = props;
    const responsiveContext = useContext(ResponsiveProviderContext);
    const utilsContext = useContext(UtilsProviderContext);

    // Callbacks
    const handleStyles = useCallback(() => {
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
    }, [classes, elRef, otherStyles, properties, responsiveContext, styles, utilsContext, wrapper]);

    // Hooks
    useLayoutEffect(() => {
        if (elRef?.current) { handleStyles(); }
    }, [elRef, handleStyles, properties]);

    return children;
}

export default Component
import React, { useContext, useLayoutEffect } from 'react';
import { css } from 'emotion';

// Context
import { ResponsiveProviderContext } from '../../providers/ResponsiveProvider';
import { UtilsProviderContext } from '../../providers/UtilsProvider';

const Component = props => {
    const { children, classes, elRef, properties, styles, wrapper } = props;
    const responsiveContext = useContext(ResponsiveProviderContext);
    const utilsContext = useContext(UtilsProviderContext);

    // Hooks
    useLayoutEffect(() => {
        if (elRef?.current) { handleStyles(); }
    }, [elRef, properties]);

    // Methods
    const handleStyles = () => {
        let responsiveStyles;
        let utilsStyles;

        if (elRef?.current) {
            elRef.current.className = '';

            if (classes?.length) {
                for (let i = 0; i < classes.length; i++) {
                    elRef.current.classList.add(css(classes[i]));
                }
            }
            
            if (wrapper) { elRef.current.classList.add(wrapper); }
            if (styles) { elRef.current.classList.add(css(styles({ framework: 'react', props: properties }))); }

            if (utilsContext?.added) {
                utilsStyles = require('@fabula/core/styles/utils/utils').default({ framework: 'react', props: properties });
                elRef.current.classList.add(css(utilsStyles));
            }

            if (responsiveContext?.added && styles) {                
                responsiveStyles = require('@fabula/core/styles/responsive/responsive').default({ framework: 'react', props: properties, styles });
                elRef.current.classList.add(css(responsiveStyles));
            }
        }
    }

    return children;
}

export default Component
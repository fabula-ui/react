import React, { Children, createContext, isValidElement } from 'react';
import { css } from 'emotion';
import UtilsStyles from '@fabula/core/theme/utils';
import { useEffect } from 'react';

const UtilsProviderContext = createContext(null);

const FabulaUtils = props => {
    const { children } = props;
    const initialState = {
        utilStyles: UtilsStyles
    }

    const childrenWithProps = children => {
        return Children.map(children, child => {
            let childProps;

            if (!isValidElement(child)) {
                return child;
            }

            childProps = { className: css(UtilsStyles({ framework: 'react', props: child.props, utils: true })), ...child.props };

            if (Children.count(child)) {
                return React.cloneElement(child, {...childProps}, childrenWithProps(child.props.children));
            }

            return React.cloneElement(child, {...childProps});
        })
    }


    return (
        <UtilsProviderContext.Provider value={initialState}>
            {childrenWithProps(children)}
        </UtilsProviderContext.Provider>
    )
}

export { UtilsProviderContext };
export default FabulaUtils;
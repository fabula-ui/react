import React, { Children, createContext, isValidElement } from 'react';
import { css } from 'emotion';
import UtilsStyles from '@fabula/core/styles/utils/utils';

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

            const {className, ...rest} = child.props;
            const classes = [css(UtilsStyles({ framework: 'react', props: child.props, utils: true })), className];
            childProps = { className: classes.join(' '), ...rest };

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
import React, { Children, createContext, isValidElement } from 'react';
import { css } from 'emotion';
import UtilsStyles from '@fabula/core/theme/utils';

const UtilsProviderContext = createContext(null);

const UtilsProvider = props => {
    const { children } = props;
    const initialState = {
        utilStyles: UtilsStyles
    }

    const childrenWithProps = children => {
        return Children.map(children, child => {
            let childProps;

            console.log(typeof child);

            if (!isValidElement(child)) {
                return child;
            }

            childProps = { className: css(UtilsStyles({ framework: 'react', props: child.props, utils: true })), ...child.props };

            if (child.props?.children) {
                return React.cloneElement(child, {...childProps}, childrenWithProps(child.props.children));
            }

            return React.cloneElement(child, {...childProps});
        })
    }

    // mapRecursive();

    // const mapRecursive = (children, callback) => (
    //     Children.map(
    //         children,
    //         child => (
    //             child.props.children
    //                 ? [callback(child), mapRecursive(child.props.children, callback)]
    //                 : callback(child)
    //         ),
    //     )
    // );


    return (
        <UtilsProviderContext.Provider value={initialState}>
            {childrenWithProps(children)}
        </UtilsProviderContext.Provider>
    )
}

export { UtilsProviderContext };
export default UtilsProvider;
import React, { createContext } from 'react';
import UtilsStyles from '@fabula/core/theme/utils';

const UtilsProviderContext = createContext(null);

const UtilsProvider = props => {
    const { children } = props;
    const initialState = {
        utilStyles: UtilsStyles
    }

    return (
        <UtilsProviderContext.Provider value={initialState}>
            {children}
        </UtilsProviderContext.Provider>
    )
}

export { UtilsProviderContext };
export default UtilsProvider;
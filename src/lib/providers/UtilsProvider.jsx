import React, { createContext } from 'react';
import { css } from 'emotion';
import UtilsStyles from '@fabula/core/theme/utils';
import { useEffect } from 'react';

const UtilsProviderContext = createContext(null);

const UtilsProvider = props => {
    const { children } = props;
    const initialState = {
        added: true
    }

    return (
        <UtilsProviderContext.Provider value={initialState}>
            {children}
        </UtilsProviderContext.Provider>
    )
}

export { UtilsProviderContext };
export default UtilsProvider;
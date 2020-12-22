import React, { createContext } from 'react';

export const UtilsProviderContext = createContext(null);

export const UtilsProvider = props => {
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
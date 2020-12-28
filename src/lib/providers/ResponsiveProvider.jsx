import React, { createContext } from 'react';

// Context
export const ResponsiveProviderContext = createContext(null);

export const ResponsiveProvider = props => {
    const { children } = props;
    const initialState = {
        added: true
    };

    return (
        <ResponsiveProviderContext.Provider value={initialState}>
            {children}
        </ResponsiveProviderContext.Provider>
    )
}
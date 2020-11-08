import React, { createContext } from 'react';

// Context
const ResponsiveProviderContext = createContext(null);

const ResponsiveProvider = props => {
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

export default ResponsiveProvider;
export { ResponsiveProviderContext };
import React, { createContext } from 'react';

// Providers
import { ThemeProvider } from './ThemeProvider';

export const FabulaProviderContext = createContext({});

export const FabulaProvider = props => {
    const { children, theme } = props
    let initialState = {};

    return (
        <FabulaProviderContext.Provider value={initialState}>
            {<ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>}
        </FabulaProviderContext.Provider>
    )
}
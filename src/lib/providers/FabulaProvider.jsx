import React, { createContext } from 'react';

// Providers
import ThemeProvider from './ThemeProvider';

const FabulaProviderContext = createContext({});

const FabulaProvider = props => {
    const { children, theme } = props
    let initialState = {};

    return (
        <FabulaProviderContext.Provider value={initialState}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </FabulaProviderContext.Provider>
    )
}

export { FabulaProviderContext };
export default FabulaProvider;
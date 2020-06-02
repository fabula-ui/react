import React, { createContext } from 'react';

// Providers
import ThemeProvider from './ThemeProvider';

const InitialState = {
    test: 'Testing'
};

const FabulaProviderContext = createContext(InitialState);

const FabulaProvider = props => {
    const { children, theme, utils } = props
    let initialState = {
        utils
    };

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
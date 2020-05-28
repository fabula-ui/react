import React, { createContext } from 'react';

// Providers
import ThemeProvider from './ThemeProvider';
import ToastProvider from './ToastProvider';

const InitialState = {
    test: 'Testing'
};

const FabulaProviderContext = createContext(InitialState);

const FabulaProvider = props => {
    const { children, settings, theme, utils } = props
    let initialState = {
        utils
    };

    return (
        <FabulaProviderContext.Provider value={initialState}>
            <ThemeProvider theme={theme}>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </ThemeProvider>
        </FabulaProviderContext.Provider>
    )
}

export { FabulaProviderContext };
export default FabulaProvider;
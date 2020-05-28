import React, { useEffect, useState } from 'react';

// // Default theme
import { setBaseTheme } from '@fabula/core/theme';

const ThemeProvider = props => {
    const { children, theme = {} } = props;

    setBaseTheme({ theme });

    return children;
}

export default ThemeProvider;
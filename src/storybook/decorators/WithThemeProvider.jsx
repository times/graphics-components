import React from 'react';
import ThemeProvider from '../../lib/themes/ThemeProvider';

const WithThemeProvider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default WithThemeProvider; 
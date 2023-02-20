import { ThemeProvider } from 'styled-components';
import React from 'react';

import { ThemeOptionsProvider } from '../ThemeOptionsProvider/ThemeOptionsProvider';
import { useThemeOptions } from '../../hooks/useThemeOptions';
import { GlobalStyles } from '../../styles/globalStyles';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProviderProps) => {
    const themeOptions = useThemeOptions();

    return (
        <ThemeOptionsProvider>
            <ThemeProvider theme={themeOptions}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeOptionsProvider>
    );
};

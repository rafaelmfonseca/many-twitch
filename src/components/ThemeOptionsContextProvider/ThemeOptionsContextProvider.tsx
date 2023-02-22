import { ThemeProvider } from 'styled-components';
import { useState, ReactNode } from 'react';

import { getThemeOptionsInStorage } from '../../utils/themeOptionsUtils';
import { ThemeOptionsContext } from '../../hooks/useThemeOptions';
import { ThemeOptions } from '../../models/themeOptions';

interface ThemeOptionsContextProviderProps {
    children: ReactNode;
}

export const ThemeOptionsContextProvider = ({ children }: ThemeOptionsContextProviderProps) => {
    const [ themeOptions, setThemeOptions ] = useState<ThemeOptions>(getThemeOptionsInStorage());

    return (
        <ThemeOptionsContext.Provider value={{ themeOptions, setThemeOptions }}>
            <ThemeProvider theme={themeOptions}>
                {children}
            </ThemeProvider>
        </ThemeOptionsContext.Provider>
    );
};

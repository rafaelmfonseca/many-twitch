import { ThemeOptionsContext, useThemeOptions } from '../../hooks/useThemeOptions';

interface ThemeOptionsProviderProps {
    children: React.ReactNode;
}

export const ThemeOptionsProvider = ({ children }: ThemeOptionsProviderProps) => {
    const themeOptions = useThemeOptions();

    if (!children) {
        return null;
    }
  
    return (
        <ThemeOptionsContext.Provider value={themeOptions}>{children}</ThemeOptionsContext.Provider>
    );
}

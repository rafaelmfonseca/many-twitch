import { createContext, useContext } from 'react';

export interface OverlapStreamsThemeOptions {
    name: 'overlap-streams';
    opacity: number;
    width: number;
}

export type ThemeOptions = OverlapStreamsThemeOptions;

function getDefaultThemeOptions(): ThemeOptions {
    return {
        name: 'overlap-streams',
        opacity: 0.8,
        width: 500
    };
}

function getThemeOptionsInStorageOrDefault(): ThemeOptions {
    const themeOptions = window.localStorage.getItem('theme_options');

    if (typeof themeOptions === 'string' && themeOptions.trimStart().indexOf('{') === 0) {
        return JSON.parse(themeOptions);
    }

    window.localStorage.clear();

    return getDefaultThemeOptions();
}

export const ThemeOptionsContext = createContext<ThemeOptions>(getThemeOptionsInStorageOrDefault());
export const useThemeOptions = () => useContext(ThemeOptionsContext);

  
import { DEFAULT_THEME_OPTIONS_VALUE, THEME_OPTIONS_STORAGE_KEY } from '../common/constants';
import { ThemeOptions } from '../models/themeOptions';

export function getThemeOptionsInStorage(): ThemeOptions {
    let themeOptions: ThemeOptions | null = null;

    try {
        themeOptions = JSON.parse(window.localStorage.getItem(THEME_OPTIONS_STORAGE_KEY) as string);
    } catch (e) {}

    if (!themeOptions) {
        themeOptions = DEFAULT_THEME_OPTIONS_VALUE;
    }

    return themeOptions;
}

export function setThemeOptionsInStorage(themeOptions: ThemeOptions): void {
    window.localStorage.setItem(THEME_OPTIONS_STORAGE_KEY, JSON.stringify(themeOptions));
}

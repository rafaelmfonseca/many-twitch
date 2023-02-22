import { ThemeOptions } from '../models/themeOptions';

export function getDefaultThemeOptions(): ThemeOptions {
    return {
        name: 'overlap-streams',
        opacity: 80,
        width: 500
    };
}

export function getThemeOptionsInStorage(): ThemeOptions | undefined {
    const themeOptions = window.localStorage.getItem('theme_options');

    if (typeof themeOptions === 'string') {
        if (themeOptions.trimStart().indexOf('{') === 0) {
            return JSON.parse(themeOptions);
        } else {
            window.localStorage.clear();
        }
    }

    return undefined;
}

import { createContext, useContext, Dispatch, SetStateAction } from 'react';
import { ContextError } from '../errors/contextError';

import { ThemeOptions } from '../models/themeOptions';

interface ThemeOptionsContextValue {
    themeOptions: ThemeOptions;
    setThemeOptions: Dispatch<SetStateAction<ThemeOptions>>;
};

export const ThemeOptionsContext = createContext<ThemeOptionsContextValue | null>(null);
export function useThemeOptions(): ThemeOptionsContextValue {
    const value = useContext(ThemeOptionsContext);
    if (!value) {
        throw new ContextError('ThemeOptionsContext');
    }
    return value;
}

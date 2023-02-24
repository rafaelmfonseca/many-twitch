import { ThemeOptions } from '../models/themeOptions';

// Local storage
export const THEME_OPTIONS_STORAGE_KEY = 'theme_options';

// Theme options
export const DEFAULT_THEME_OPTIONS_VALUE: ThemeOptions = {
    name: 'overlap-streams',
    streamsOpacity: 100,
    streamsWidth: 750,
    streamsAlignment: 'flex-end',
    streamsDirection: 'column',
    mainStreamMargin: 'none',
    chatWidth: 300,
};

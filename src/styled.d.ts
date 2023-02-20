import 'styled-components';

import { ThemeOptions } from './hooks/useThemeOptions';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeOptions { }
}

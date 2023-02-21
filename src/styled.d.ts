import 'styled-components';

import { ThemeOptions } from './models/themeOptions';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeOptions { }
}

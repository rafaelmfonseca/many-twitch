import { createGlobalStyle, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

import { overlapStreamsThemeStyles } from './overlapStreamsThemeStyles';
import { ThemeOptionsNames } from '../models/themeOptions';

const availableThemeStyles: { [theme in ThemeOptionsNames]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
    'overlap-streams': overlapStreamsThemeStyles
};

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    ${({ theme }) => (availableThemeStyles[theme.name] || '')}
`;

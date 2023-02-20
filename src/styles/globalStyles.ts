import { createGlobalStyle, css } from 'styled-components';
import { OverlapStreamsThemeOptions } from '../hooks/useThemeOptions';
import { calculateHeightWithTwitchAspectRatio } from '../utils/resolutionUtils';

export const overlapStreamsThemeCss = css`
    .twitch-players-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .twitch-embedded-player:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .twitch-embedded-player:not(:first-child) {
        width: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => theme.width}px;
        height: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => calculateHeightWithTwitchAspectRatio(theme.width)}px;
        opacity: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => theme.opacity};
        z-index: 9999;
    }
`;

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${(props) => (props.theme.name === 'overlap-streams') ? overlapStreamsThemeCss : ''}
`;

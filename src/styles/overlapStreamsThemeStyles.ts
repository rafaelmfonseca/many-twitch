import { css } from 'styled-components';

import { calculateHeightWithTwitchAspectRatio } from '../utils/resolutionUtils';
import { OverlapStreamsThemeOptions } from '../models/themeOptions';

export const overlapStreamsThemeStyles = css`
    .twitch-players-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .twitch-embedded-player.elem-order-1 {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
    }

    .twitch-embedded-player:not(.elem-order-1) {
        width: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.width)}px;
        height: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (calculateHeightWithTwitchAspectRatio(theme.width))}px;
        opacity: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.opacity / 100)};
        z-index: 9999;
    }

    .twitch-chats-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .twitch-embedded-chat {
        width: 100%;
        height: 100%;
    }
`;

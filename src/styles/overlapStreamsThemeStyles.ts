import { css } from 'styled-components';

import { calculateHeightWithTwitchAspectRatio } from '../utils/resolutionUtils';
import { OverlapStreamsThemeOptions } from '../models/themeOptions';

export const overlapStreamsThemeStyles = css`
    .modal, .modal-dialog, .modal-backdrop {
        z-index: 99999;
    }

    .wrapper {
        display: grid;
        grid-template-rows: 1fr min-content;
        grid-template-columns: auto ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.chatWidth)}px;
        width: 100%;
        height: 100%;
    }

    .wrapper > .main-content {
        grid-row: 1 / span 2;
        grid-column: 1;
    }

    .wrapper > .main-sidebar {
        grid-row: 1;
        grid-column: 2;
    }

    .wrapper > .main-options {
        grid-row: 2;
        grid-column: 2;
    }

    /* Players container */
    .twitch-players-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.streamsDirection)};
        align-items: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.streamsAlignment)};
    }

    .twitch-players-container > .twitch-embedded-player.elem-order-1 {
        position: absolute;
        z-index: 0;

        ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.mainStreamMargin === 'none' ? `
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            ` : '')}

        ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.mainStreamMargin === 'right' ? `
            width: calc(100% - ${theme.streamsWidth}px);
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            ` : '')}

        ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.mainStreamMargin === 'bottom' ? `
            width: 100%;
            height: calc(100% - ${(calculateHeightWithTwitchAspectRatio(theme.streamsWidth))}px);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        ` : '')}
        
        ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.mainStreamMargin === 'left' ? `
            width: calc(100% - ${theme.streamsWidth}px);
            height: 100%;
            top: 0;
            left: ${theme.streamsWidth}px;
            right: 0;
            bottom: 0;
        ` : '')}

        ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.mainStreamMargin === 'top' ? `
            width: 100%;
            height: calc(100% - ${(calculateHeightWithTwitchAspectRatio(theme.streamsWidth))}px);
            top: ${(calculateHeightWithTwitchAspectRatio(theme.streamsWidth))}px;
            left: 0;
            right: 0;
            bottom: 0;
        ` : '')}
    }

    .twitch-players-container > .twitch-embedded-player:not(.elem-order-1) {
        width: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.streamsWidth)}px;
        height: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (calculateHeightWithTwitchAspectRatio(theme.streamsWidth))}px;
        opacity: ${({ theme }: { theme: OverlapStreamsThemeOptions }) => (theme.streamsOpacity / 100)};
        z-index: 9999;
    }

    /* Chat container */
    .twitch-chats-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .twitch-chats-container > .twitch-embedded-chat {
        width: 100%;
        height: 100%;
    }

    /* Options container */
    .twitch-options-container {
        margin: 0.25rem;
    }

    .modal-body {
        overflow-wrap: break-word;
    }
`;

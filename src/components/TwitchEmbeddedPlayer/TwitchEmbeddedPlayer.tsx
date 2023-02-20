import styled, { CSSProperties } from 'styled-components';

const IFrame = styled.iframe.attrs(({ style }) => ({
    className: `twitch-embedded-player ${(style !== undefined && style.order ? 'elem-order-' + style.order : '')}`
}))`
    border: none;
`;

interface TwitchEmbeddedPlayerProps {
    channel: string;
    parents: string[];
    muted: boolean;
    style: CSSProperties | undefined;
}

export const TwitchEmbeddedPlayer = ({ channel, muted, parents, style }: TwitchEmbeddedPlayerProps) => {
    return (
        <IFrame
            id={`twitch_embedded_player_${channel}`}
            src={`https://player.twitch.tv/?muted=${muted}&channel=${channel}${parents.map(parent => `&parent=${parent}`).join('')}`}
            allowFullScreen={true}
            style={style}></IFrame>
    );
};

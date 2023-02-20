import styled from 'styled-components';

const IFrame = styled.iframe.attrs({
    className: 'twitch-embedded-player'
})`
    border: none;
`;

interface TwitchEmbeddedPlayerProps {
    channel: string;
    parents: string[];
    muted: boolean;
}

export const TwitchEmbeddedPlayer = ({ channel, muted, parents }: TwitchEmbeddedPlayerProps) => {
    return (
        <IFrame
            id={`twitch_embedded_player_${channel}`}
            src={`https://player.twitch.tv/?muted=${muted}&channel=${channel}${parents.map(parent => `&parent=${parent}`).join('')}`}
            allowFullScreen={true}></IFrame>
    );
};

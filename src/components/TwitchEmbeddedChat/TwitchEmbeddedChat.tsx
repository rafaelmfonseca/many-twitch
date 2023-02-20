import styled from 'styled-components';

const IFrame = styled.iframe.attrs({
    className: 'twitch-embedded-chat'
})`
    border: none;
`;

interface TwitchEmbeddedChatProps {
    channel: string;
    parents: string[];
}

export const TwitchEmbeddedChat = ({ channel, parents }: TwitchEmbeddedChatProps) => {
    return (
        <IFrame
            id={`twitch_embedded_chat_${channel}`}
            src={`https://twitch.tv/embed/${channel}/chat?${parents.map(parent => `&parent=${parent}`).join('')}`}></IFrame>
    );
};

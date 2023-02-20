import styled, { CSSProperties } from 'styled-components';

const IFrame = styled.iframe.attrs(({ style }) => ({
    className: `twitch-embedded-chat ${(style !== undefined && style.order ? 'elem-order-' + style.order : '')}`
}))`
    border: none;
`;

interface TwitchEmbeddedChatProps {
    channel: string;
    parents: string[];
    style: CSSProperties | undefined;
}

export const TwitchEmbeddedChat = ({ channel, parents, style }: TwitchEmbeddedChatProps) => {
    return (
        <IFrame
            id={`twitch_embedded_chat_${channel}`}
            src={`https://twitch.tv/embed/${channel}/chat?${parents.map(parent => `&parent=${parent}`).join('')}`}
            style={style}></IFrame>
    );
};

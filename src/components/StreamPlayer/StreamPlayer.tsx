import styled from 'styled-components';

function calculateTwitchStreamHeight (width: number) {
    const aspectRatio = 9 / 16;
    const height = width * aspectRatio;
    return height;
}
  
interface IFrameProps {
    fullWidth: string | number;
    index: number;
}

const IFrame = styled.iframe<IFrameProps>`
    border: none;

    ${({ fullWidth, index }) => typeof fullWidth === 'string' ? `
        width: ${fullWidth};
        height: ${fullWidth};
    ` : `
        position: absolute;
        top: ${((index - 1) * calculateTwitchStreamHeight(fullWidth))}px;
        right: 0;
        width: ${fullWidth}px;
        height: ${calculateTwitchStreamHeight(fullWidth)}px;
        border: 1px solid rgba(255, 255, 255, 0.33);
    `}
`;

export const StreamPlayer = ({ channelName, fullWidth, index }: { channelName: string, fullWidth: string | number, index: number }) => {
    return (
        <IFrame
            id={`embed_${channelName}`}
            src={`https://player.twitch.tv/?muted=true&channel=${channelName}&parent=${process.env.REACT_APP_WEBSITE_URL}&parent=${process.env.REACT_APP_WEBSITE_URL}`}
            allowFullScreen={true}
            fullWidth={fullWidth}
            index={index}></IFrame>
    );
};

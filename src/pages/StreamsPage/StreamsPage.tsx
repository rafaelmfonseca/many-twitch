import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { TwitchEmbeddedChat } from '../../components/TwitchEmbeddedChat/TwitchEmbeddedChat';
import { MainContent, MainSidebar, Wrapper } from '../../components/Container/Container';
import { useStreamsHashParams } from '../../hooks/useStreamsHashParams';
import { Theme } from '../../components/Theme/Theme';

export const StreamsPage = () => {
    const [ streams, setStreams ] = useStreamsHashParams();

    return (
        <Theme>
            <Wrapper>
                <MainContent>
                    <MainContent.Content>
                        {streams.map((stream: string) => (
                            <TwitchEmbeddedPlayer channel={stream} muted={true} parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]} key={stream}></TwitchEmbeddedPlayer>
                        ))}
                    </MainContent.Content>
                </MainContent>
                <MainSidebar>
                    <MainSidebar.Content>
                        {streams.map((stream: string) => (
                            <TwitchEmbeddedChat channel={stream} parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]} key={stream}></TwitchEmbeddedChat>
                        ))}
                    </MainSidebar.Content>
                </MainSidebar>
            </Wrapper>
        </Theme>
    );
};

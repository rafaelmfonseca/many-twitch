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
                        {streams.concat().sort().map((stream: string, index: number) => (
                            <TwitchEmbeddedPlayer
                                channel={stream}
                                muted={index > 0}
                                parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]}
                                key={stream}
                                style={{ order: (streams.indexOf(stream) + 1) }}></TwitchEmbeddedPlayer>
                        ))}
                    </MainContent.Content>
                </MainContent>
                <MainSidebar>
                    <MainSidebar.Content>
                        {streams.concat().sort().map((stream: string) => (
                            <TwitchEmbeddedChat
                                channel={stream}
                                parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]}
                                key={stream}
                                style={{ order: (streams.indexOf(stream) + 1) }}></TwitchEmbeddedChat>
                        ))}
                    </MainSidebar.Content>
                </MainSidebar>
            </Wrapper>
        </Theme>
    );
};

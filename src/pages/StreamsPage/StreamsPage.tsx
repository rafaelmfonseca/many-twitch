import { ThemeOptionsContextProvider } from '../../components/ThemeOptionsContextProvider/ThemeOptionsContextProvider';
import { ModalContextProvider } from '../../components/ModalContextProvider/ModalContextProvider';
import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { TwitchEmbeddedChat } from '../../components/TwitchEmbeddedChat/TwitchEmbeddedChat';
import { ThemeOptionsModal } from '../../components/ThemeOptionsModal/ThemeOptionsModal';
import { MainContent, MainSidebar, Wrapper } from '../../components/Container/Container';
import { GlobalHotkeys } from '../../components/GlobalHotkeys/GlobalHotkeys';
import { useStreamsHashParams } from '../../hooks/useStreamsHashParams';
import { GlobalStyles } from '../../styles/globalStyles';

export const StreamsPage = () => {
    const [ streams, setStreams ] = useStreamsHashParams();

    return (
        <ModalContextProvider>
            <ThemeOptionsContextProvider>
                <GlobalStyles />
                <GlobalHotkeys />
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
                                    darkpopout={true}
                                    style={{ order: (streams.indexOf(stream) + 1) }}></TwitchEmbeddedChat>
                            ))}
                        </MainSidebar.Content>
                    </MainSidebar>
                </Wrapper>
                <ThemeOptionsModal onSubmit={(data) => console.log(data)}></ThemeOptionsModal>
            </ThemeOptionsContextProvider>
        </ModalContextProvider>
    );
};

import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { getDefaultThemeOptions, getThemeOptionsInStorage } from '../../utils/themeOptionsUtils';
import { TwitchEmbeddedChat } from '../../components/TwitchEmbeddedChat/TwitchEmbeddedChat';
import { ThemeOptionsModal } from '../../components/ThemeOptionsModal/ThemeOptionsModal';
import { MainContent, MainSidebar, Wrapper } from '../../components/Container/Container';
import { useStreamsHashParams } from '../../hooks/useStreamsHashParams';
import { ThemeOptionsContext } from '../../hooks/useThemeOptions';
import { GlobalStyles } from '../../styles/globalStyles';
import { ThemeOptions } from '../../models/themeOptions';
import { ModalContext } from '../../hooks/useModal';

export const StreamsPage = () => {
    const [ options, setOptions ] = useState<ThemeOptions>((getThemeOptionsInStorage() || getDefaultThemeOptions()));
    const [ streams, setStreams ] = useStreamsHashParams();
    const [ modals, setModals ] = useState<{ [modal: string]: boolean }>({});

    // TODO: useCallback? move to its own component?
    const isOpened = (modal: string) => {
        return (modals[modal] === true);
    };

    const openModal = (modal: string) => {
        setModals(modals => ({ ...modals, [modal]: true }));
    };
    
    const closeModal = (modal: string) => {
        setModals(modals => ({ ...modals, [modal]: false }));
    };

    return (
        <ModalContext.Provider value={{ modals, isOpened, openModal, closeModal }}>
            <ThemeOptionsContext.Provider value={[ options, setOptions ]}>
                <ThemeProvider theme={options}>
                    <GlobalStyles />
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
                    <ThemeOptionsModal></ThemeOptionsModal>
                </ThemeProvider>
            </ThemeOptionsContext.Provider>
        </ModalContext.Provider>
    );
};

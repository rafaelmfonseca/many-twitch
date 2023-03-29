import { Button } from 'react-bootstrap';
import { useState } from 'react';

import { MainContent, MainOptions, MainSidebar, Wrapper } from '../../components/Container/Container';
import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { TwitchEmbeddedChat } from '../../components/TwitchEmbeddedChat/TwitchEmbeddedChat';
import { ThemeOptionsModal } from '../../components/ThemeOptionsModal/ThemeOptionsModal';
import { setThemeOptionsInStorage } from '../../utils/themeOptionsUtils';
import { useStreamsHashParams } from '../../hooks/useStreamsHashParams';
import { useThemeOptions } from '../../hooks/useThemeOptions';
import { ThemeOptions } from '../../models/themeOptions';

export const StreamsPage = () => {
    const [ showThemeOptionsModal, setShowThemeOptionsModal ] = useState(false);
    const { themeOptions, setThemeOptions } = useThemeOptions();
    const [ streams, setStreams ] = useStreamsHashParams();

    const handleHideThemeOptionsModal = () => {
        setShowThemeOptionsModal(false);
    };

    const handleShowThemeOptionsModal = () => {
        setShowThemeOptionsModal(true);
    };

    const handleSaveThemeOptionsModal = (themeOptions: ThemeOptions) => {
        setThemeOptions(themeOptions);
        setThemeOptionsInStorage(themeOptions);
    };

    return (
        <>
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
                <MainOptions>
                    <MainOptions.Content>
                        <Button size="sm" variant="outline-secondary" onClick={handleShowThemeOptionsModal}>Settings</Button>
                    </MainOptions.Content>
                </MainOptions>
            </Wrapper>
            <ThemeOptionsModal show={showThemeOptionsModal} onHide={handleHideThemeOptionsModal} onSave={handleSaveThemeOptionsModal}></ThemeOptionsModal>
        </>
    );
};

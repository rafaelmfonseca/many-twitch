import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { MainContent, MainSidebar, Wrapper } from '../../components/Container/Container';
import { TwitchEmbeddedChat } from '../../components/TwitchEmbeddedChat/TwitchEmbeddedChat';
import { Theme } from '../../components/Theme/Theme';

function extractStreamsFromString(params: string): string[] {
    if (params !== undefined) {
        return params.split('/');
    }

    return [];
}

export const StreamsPage = () => {
    const { '*': streamsStr } = useParams<string>() as { '*': string };
    const [ streams, setStreams ] = useState<string[]>(extractStreamsFromString(streamsStr));

    return (
        <Theme>
            <Wrapper>
                <MainContent>
                    <MainContent.Content>
                        {streams.map((stream: string, index: number) => (
                            <TwitchEmbeddedPlayer channel={stream} muted={true} parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]} key={stream}></TwitchEmbeddedPlayer>
                        ))}
                    </MainContent.Content>
                </MainContent>
                <MainSidebar>
                    <MainSidebar.Content>
                        {streams.map((stream: string, index: number) => (
                            <TwitchEmbeddedChat channel={stream} parents={[ process.env.REACT_APP_WEBSITE_URL || '' ]} key={stream}></TwitchEmbeddedChat>
                        ))}
                    </MainSidebar.Content>
                </MainSidebar>
            </Wrapper>
        </Theme>
    );
};

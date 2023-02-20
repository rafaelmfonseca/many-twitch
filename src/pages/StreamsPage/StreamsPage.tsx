import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { TwitchEmbeddedPlayer } from '../../components/TwitchEmbeddedPlayer/TwitchEmbeddedPlayer';
import { Container, Content, Sidebar, Wrapper } from '../../components/Container/Container';
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
                <Content>
                    <Container>
                        {streams.map((stream: string, index: number) => (
                            <TwitchEmbeddedPlayer channel={stream} muted={true} parent={process.env.REACT_APP_WEBSITE_URL || ''} key={stream}></TwitchEmbeddedPlayer>
                        ))}                
                    </Container>
                </Content>
                <Sidebar>
                </Sidebar>
            </Wrapper>
        </Theme>
    );
};

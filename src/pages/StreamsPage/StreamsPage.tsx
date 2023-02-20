import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, Sidebar, Wrapper } from '../../components/Container/Container';
import { StreamPlayer } from '../../components/StreamPlayer/StreamPlayer';

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
        <Wrapper>
            <Content>
                <Container>
                    {streams.map((stream: string, index: number) => (
                        <StreamPlayer channelName={stream} fullWidth={(index === 0 ? '100%' : 500)} key={stream} index={index}></StreamPlayer>
                    ))}                
                </Container>
            </Content>
            <Sidebar>
            </Sidebar>
        </Wrapper>
    );
};

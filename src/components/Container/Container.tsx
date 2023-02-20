import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 350px;
    width: 100%;
    height: 100%;
`;

const MainContentDiv = styled.div`
    grid-row: 1;
    grid-column: 1;
`;

const MainSidebarDiv = styled.div`
    grid-row: 1;
    grid-column: 2;
`;

export const MainContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainContentDiv>{children}</MainContentDiv>
    );
};

MainContent.Content = styled.div.attrs({ className: 'twitch-players-container' })``;

export const MainSidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainSidebarDiv>{children}</MainSidebarDiv>
    );
};

MainSidebar.Content = styled.div.attrs({ className: 'twitch-chats-container' })``;

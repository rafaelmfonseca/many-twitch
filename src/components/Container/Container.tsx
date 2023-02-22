import styled from 'styled-components';

export const Wrapper = styled.div.attrs({ className: 'wrapper' })``;

export const MainContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="main-content">{children}</div>
    );
};

MainContent.Content = styled.div.attrs({ className: 'twitch-players-container' })``;

export const MainSidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="main-sidebar">{children}</div>
    );
};

MainSidebar.Content = styled.div.attrs({ className: 'twitch-chats-container' })``;

import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'twitch-players-container'
})``;

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 350px;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    grid-row: 1;
    grid-column: 1;
`;


export const Sidebar = styled.div`
    grid-row: 1;
    grid-column: 2;
`;

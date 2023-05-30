import { styled } from 'solid-styled-components';

export const PageOverlayStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme!.colors.background.page};
`;

export const HeadingStyled = styled.div`
    margin-top: 28px;
    display: flex;
    gap: 8px;
    margin-bottom: 28px;
`;

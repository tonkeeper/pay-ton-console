import { styled } from 'solid-styled-components';
import { media } from 'src/styles';

export const PageOverlayStyled = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme!.colors.background.page};
    padding: 24px;

    ${media('mobile')} {
        padding: 16px 24px;
    }
`;

export const HeadingStyled = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;

    ${media('mobile')} {
        margin-bottom: 16px;
    }
`;

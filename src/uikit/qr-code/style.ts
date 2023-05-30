import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';

export const QrCodeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: ${props => props.theme!.colors.background.contentTint};
    border-radius: ${borderRadius.md};
`;

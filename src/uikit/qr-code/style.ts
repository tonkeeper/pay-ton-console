import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';
import { Button } from 'src/uikit';

export const QrCodeStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: ${props => props.theme!.colors.background.contentTint};
    border-radius: ${borderRadius.md};
`;

export const CopyButtonStyled = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
    width: fit-content;
`;

import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';
import { Button } from 'src/uikit';

export const CopyButtonStyled = styled(Button)`
    position: relative;
`;

export const CopiedBadgeStyled = styled.div`
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px;
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.md};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
`;

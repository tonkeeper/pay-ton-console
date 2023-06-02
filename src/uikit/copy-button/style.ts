import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';

export const CopyButtonContainer = styled.div`
    width: fit-content;
    position: relative;
`;

export const CopiedBadgeStyled = styled.div<{ position: 'bottom' | 'bottom-left' }>`
    position: absolute;
    bottom: -24px;
    ${props => (props.position === 'bottom' ? 'left: 50%' : 'right: 0')};
    transform: ${props => (props.position === 'bottom' ? 'translateX(-50%)' : 'unset')};
    padding: 4px 6px;
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.md};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
`;

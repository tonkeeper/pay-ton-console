import { styled } from 'solid-styled-components';
import { borderRadius, fontFamily, textStyles } from 'src/styles';

export const CopyPadStyled = styled.button`
    padding: 12px 10px 12px 16px;
    display: flex;
    gap: 12px;
    position: relative;

    word-break: break-word;
    font-family: ${fontFamily.mono};
    font-style: normal;
    font-weight: ${textStyles.body2.fontWeight};
    font-size: ${textStyles.body2.fontSize};
    line-height: ${textStyles.body2.lineHeight};
    color: ${props => props.theme!.colors.text.primary};
    text-align: start;

    background-color: ${props => props.theme!.colors.field.background};
    border-radius: ${borderRadius.md};
    border: none;
    cursor: pointer;

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }

    &:active {
        transform: scale(0.99);
    }

    > :first-child {
        flex: 1;
    }
`;

export const CopiedBadgeStyled = styled.div`
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 6px;
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.md};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
`;

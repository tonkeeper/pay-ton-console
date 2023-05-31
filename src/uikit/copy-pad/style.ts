import { styled } from 'solid-styled-components';
import { borderRadius, fontFamily, textStyles } from 'src/styles';

export const CopyPadStyled = styled.div`
    padding: 12px 10px 12px 16px;
    display: flex;
    gap: 12px;

    word-break: break-word;
    font-family: ${fontFamily.mono};
    font-style: normal;
    font-weight: ${textStyles.body2.fontWeight};
    font-size: ${textStyles.body2.fontSize};
    line-height: ${textStyles.body2.lineHeight};
    color: ${props => props.theme!.colors.text.primary};
    background-color: ${props => props.theme!.colors.field.background};
    border-radius: ${borderRadius.md};

    > :first-child {
        flex: 1;
    }

    > :last-child {
        height: fit-content;
    }
`;

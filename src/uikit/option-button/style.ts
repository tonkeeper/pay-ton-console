import { styled } from 'solid-styled-components';
import { mediaNotTouch, mediaTouch, textStyles } from 'src/styles';
import { toPx } from 'src/utils';

export const OptionButtonStyled = styled.button<{ coverPadding?: number }>`
    height: 48px;
    width: ${props =>
        props.coverPadding ? `calc(100% + ${toPx(props.coverPadding * 2)})` : '100%'};
    margin: ${props => (props.coverPadding ? `0 -${toPx(props.coverPadding)}` : 'unset')};
    padding: ${props => (props.coverPadding ? `0 ${toPx(props.coverPadding)}` : 'unset')};

    display: flex;
    gap: 12px;
    align-items: center;

    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.theme!.colors.text.primary};

    font-size: ${textStyles.label1.fontSize};
    font-weight: ${textStyles.label1.fontWeight};
    line-height: ${textStyles.label1.lineHeight};

    transition: background-color 0.2s ease-in-out;

    .option-btn-arrow {
        transition: transform 0.2s ease-in-out;
    }

    ${mediaNotTouch} {
        &:hover {
            background-color: ${props => props.theme!.colors.background.contentTint};
            .option-btn-arrow {
                transform: translateX(4px);
            }
        }
    }

    &:active {
        background-color: ${props => props.theme!.colors.background.contentTint};
        .option-btn-arrow {
            transform: translateX(4px);
        }
    }

    ${mediaTouch}
`;

export const TextWrapperStyled = styled.div`
    text-align: start;
    flex: 1;
`;

export const ImageStyled = styled.img`
    border-radius: 6px;
`;

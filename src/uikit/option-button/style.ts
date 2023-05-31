import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';

export const OptionButtonStyled = styled.button`
    height: 48px;
    width: 100%;
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

    .option-btn-arrow {
        transition: transform 0.2s ease-in-out;
    }

    &:hover {
        .option-btn-arrow {
            transform: translateX(4px);
        }
    }
`;

export const TextWrapperStyled = styled.div`
    text-align: start;
    flex: 1;
`;

export const ImageStyled = styled.img`
    border-radius: 6px;
`;

import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';
import { LocaleIcon } from 'src/uikit';

export const LanguageSelectContainerStyled = styled.div`
    position: relative;

    * {
        transition: color 0.2s ease-in-out;
    }

    path {
        transition: fill 0.2s ease-in-out;
    }

    transition: color 0.2s ease-in-out;

    &:hover {
        * {
            color: ${props => props.theme!.colors.text.primary};
        }

        path {
            fill: ${props => props.theme!.colors.icon.primary};
        }
    }
`;

export const LanguageSelectIconStyled = styled(LocaleIcon)`
    position: absolute;
    left: 0;
    top: 2px;
`;

export const LanguageSelectStyled = styled.select`
    padding-left: 20px;
    position: relative;
    z-index: 2;
    background: transparent;

    appearance: none;
    border: none;
    cursor: pointer;

    font-size: ${textStyles.label2.fontSize};
    font-weight: ${textStyles.label2.fontWeight};
    line-height: ${textStyles.label2.lineHeight};
    color: ${props => props.theme!.colors.text.secondary};
`;

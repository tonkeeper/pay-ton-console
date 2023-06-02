import { styled } from 'solid-styled-components';
import { A } from 'src/uikit';

export const SupportButtonStyled = styled(A)`
    display: block;
    width: fit-content;

    button * {
        transition: color 0.2s ease-in-out;
    }

    path {
        transition: fill 0.2s ease-in-out;
    }

    button {
        &:hover,
        &:active {
            transform: none;
        }
    }

    &:hover {
        * {
            color: ${props => props.theme!.colors.text.primary};
        }

        path {
            fill: ${props => props.theme!.colors.icon.primary};
        }
    }
`;

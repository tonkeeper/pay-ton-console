import { styled } from 'solid-styled-components';
import { TextStyle, textStyles } from 'src/styles';
import { Property } from 'csstype';

export const AStyled = styled.a<{ textStyle: TextStyle; color: Property.Color; asButton: boolean }>`
    text-decoration: unset;

    font-style: normal;
    font-weight: ${props => textStyles[props.textStyle].fontWeight};
    font-size: ${props => textStyles[props.textStyle].fontSize};
    line-height: ${props => textStyles[props.textStyle].lineHeight};
    min-height: ${props => textStyles[props.textStyle].minHeight};

    color: ${props => props.color};

    transition: transform 0.2s ease-in-out;

    &:hover {
        text-decoration: ${props => (props.asButton ? 'unset' : 'underline')};
        transform: ${props => (props.asButton ? 'scale(1.03)' : 'unset')};
    }

    &:active {
        text-decoration: ${props => (props.asButton ? 'unset' : 'underline')};
        transform: ${props => (props.asButton ? 'scale(0.97)' : 'unset')};
    }
`;

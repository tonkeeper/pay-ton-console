import { Property } from 'csstype';
import { styled } from 'solid-styled-components';
import { textStyles, TextStyle, fontFamily } from 'src/styles';

export const TextStyled = styled.div<{
    textStyle: TextStyle;
    color: Property.Color;
    mono: boolean;
}>`
    font-style: normal;
    font-weight: ${props => textStyles[props.textStyle].fontWeight};
    font-size: ${props => textStyles[props.textStyle].fontSize};
    line-height: ${props => textStyles[props.textStyle].lineHeight};
    min-height: ${props => textStyles[props.textStyle].minHeight};
    font-family: ${props => (props.mono ? fontFamily.mono : fontFamily.body)};

    color: ${props => props.color};
`;

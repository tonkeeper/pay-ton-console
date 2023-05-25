import { Property } from 'csstype';
import { styled } from 'solid-styled-components';
import { textStyles, TextStyle } from 'src/styles';

export const TextStyled = styled.div<{
    textStyle: TextStyle;
    color: Property.Color;
}>`
    font-style: normal;
    font-weight: ${props => textStyles[props.textStyle].fontWeight};
    font-size: ${props => textStyles[props.textStyle].fontSize};
    line-height: ${props => textStyles[props.textStyle].lineHeight};
    min-height: ${props => textStyles[props.textStyle].minHeight};

    color: ${props => props.color};
`;

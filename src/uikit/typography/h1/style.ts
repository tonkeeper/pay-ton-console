import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';
import { Property } from 'csstype';

export const H1Styled = styled.h1<{ color: Property.Color }>`
    font-style: normal;
    font-weight: ${textStyles.h1.fontWeight};
    font-size: ${textStyles.h1.fontSize};
    line-height: ${textStyles.h1.lineHeight};

    text-align: center;

    color: ${props => props.color};

    margin-top: 0;
    margin-bottom: 6px;

    cursor: default;
`;

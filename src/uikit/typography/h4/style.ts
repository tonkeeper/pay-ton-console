import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';
import { Property } from 'csstype';

export const H4Styled = styled.h4<{ color: Property.Color }>`
    font-style: normal;
    font-weight: ${textStyles.h4.fontWeight};
    font-size: ${textStyles.h4.fontSize};
    line-height: ${textStyles.h4.lineHeight};

    color: ${props => props.color};

    margin-top: 0;
    margin-bottom: 4px;

    cursor: default;
`;

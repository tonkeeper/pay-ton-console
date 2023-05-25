import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';
import { Property } from 'csstype';

export const H2Styled = styled.h2<{ color: Property.Color }>`
  font-style: normal;
  font-weight: ${textStyles.h2.fontWeight};
  font-size: ${textStyles.h2.fontSize};
  line-height: ${textStyles.h2.lineHeight}

  text-align: center;

  color: ${props => props.color};

  margin-top: 0;
  margin-bottom: 6px;

  cursor: default;
`;

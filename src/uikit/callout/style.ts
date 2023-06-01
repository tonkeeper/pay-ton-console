import { styled } from 'solid-styled-components';
import { borderRadius, Colors, textStyles } from 'src/styles';
import { rgba } from 'src/utils';

export const CalloutStyled = styled.div<{ color: keyof Colors['accent'] }>`
    padding: 10px;

    background-color: ${props => rgba(props.theme!.colors.accent[props.color], 0.12)};
    border-radius: ${borderRadius.md};

    color: ${props => props.theme!.colors.accent[props.color]};
    text-align: center;
    font-style: normal;
    font-size: ${textStyles.body2.fontSize};
    font-weight: ${textStyles.body2.fontWeight};
    line-height: ${textStyles.body2.lineHeight};
`;

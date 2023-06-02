import { styled } from 'solid-styled-components';
import { borderRadius, BorderRadius, mediaNotTouch, mediaTouch, textStyles } from 'src/styles';
import { Property } from 'csstype';

export const ButtonStyled = styled.button<{
    appearance: 'primary' | 'secondary' | 'flat';
    borderRadius: BorderRadius;
    width: Property.Width;
}>`
    background-color: ${props =>
        props.appearance === 'flat'
            ? 'transparent'
            : props.theme!.colors.button[props.appearance].background};
    color: ${props =>
        props.appearance === 'flat'
            ? props.theme!.colors.text.primary
            : props.theme!.colors.button[props.appearance].foreground};

    padding: ${props => (props.appearance === 'flat' ? '0' : '12px 16px')};
    border: none;
    border-radius: ${props => borderRadius[props.borderRadius]};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    font-size: ${textStyles.label2.fontSize};
    font-weight: ${textStyles.label2.fontWeight};
    line-height: ${textStyles.label2.lineHeight};

    transition: transform 0.2s ease-in-out;

    width: ${props => props.width};
    ${mediaNotTouch} {
        &:hover {
            transform: ${props => (props.disabled ? 'unset' : 'scale(1.03)')};
        }
    }

    &:active {
        transform: ${props => (props.disabled ? 'unset' : 'scale(0.97)')};
    }

    ${mediaTouch} {
        &:active {
            transform: ${props => (props.disabled ? 'unset' : 'scale(0.94)')};
        }
    }
`;

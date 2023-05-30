import { Component, JSXElement } from 'solid-js';
import { Styleable } from 'src/models';
import { ButtonStyled } from './style';
import { Property } from 'csstype';
import { BorderRadius } from 'src/styles';

export interface ButtonProps extends Styleable {
    appearance?: 'primary' | 'secondary' | 'flat';
    borderRadius?: BorderRadius;
    width?: Property.Width;
    children: JSXElement;
    onClick?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    onMouseEnter?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    onMouseLeave?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    disabled?: boolean;
    ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void) | undefined;
}

export const Button: Component<ButtonProps> = props => {
    return (
        <ButtonStyled
            appearance={props.appearance || 'primary'}
            width={props.width || '100%'}
            borderRadius={props.borderRadius || 'md'}
            class={props.class}
            onClick={e => props.onClick?.(e)}
            onMouseEnter={e => props.onMouseEnter?.(e)}
            onMouseLeave={e => props.onMouseLeave?.(e)}
            ref={props.ref}
            disabled={props.disabled}
        >
            {props.children}
        </ButtonStyled>
    );
};

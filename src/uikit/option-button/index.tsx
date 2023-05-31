import { Component, JSXElement } from 'solid-js';
import { Styleable } from 'src/models';
import { ImageStyled, OptionButtonStyled, TextWrapperStyled } from './style';
import { ArrowIcon } from '../icons';

export interface OptionButtonProps extends Styleable {
    children: JSXElement;
    leftIcon: JSXElement | string;
    onClick?: (e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
}

export const OptionButton: Component<OptionButtonProps> = props => {
    return (
        <OptionButtonStyled class={props.class} onClick={e => props.onClick?.(e)}>
            {typeof props.leftIcon === 'string' ? (
                <ImageStyled src={props.leftIcon} width="24px" height="24px" />
            ) : (
                props.leftIcon
            )}
            <TextWrapperStyled>{props.children}</TextWrapperStyled>
            <ArrowIcon class="option-btn-arrow" />
        </OptionButtonStyled>
    );
};

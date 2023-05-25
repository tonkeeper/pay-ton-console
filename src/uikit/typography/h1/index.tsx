import { useI18n } from '@solid-primitives/i18n';
import { Component, JSXElement } from 'solid-js';
import { H1Styled } from './style';
import { Styleable, Translateable } from 'src/models';
import { Property } from 'csstype';
import { useTheme } from 'solid-styled-components';
import { Colors } from 'src/styles';

export interface H1Props extends Styleable, Translateable {
    children?: JSXElement;
    color?: keyof Colors['text'];
}

export const H1: Component<H1Props> = props => {
    const theme = useTheme();
    const [t] = useI18n();
    const color = (): Property.Color => theme.colors.text[props.color || 'primary'];
    return (
        <H1Styled color={color()} class={props.class}>
            {props.translationKey
                ? t(props.translationKey, props.translationValues, props.children?.toString())
                : props.children}
        </H1Styled>
    );
};

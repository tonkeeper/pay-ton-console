import { useI18n } from '@solid-primitives/i18n';
import { Property } from 'csstype';
import { Component } from 'solid-js';
import { useTheme } from 'solid-styled-components';
import { TextStyled } from './style';
import { Styleable, Translateable, WithChildren } from 'src/models';
import { Colors, TextStyle } from 'src/styles';

export interface TextProps extends Styleable, Translateable, WithChildren {
    textStyle?: TextStyle;
    color?: keyof Colors['text'];
}

export const Text: Component<TextProps> = props => {
    const theme = useTheme();
    const [t] = useI18n();
    let textRef: HTMLDivElement | undefined;

    const color = (): Property.Color => theme.colors.text[props.color || 'primary'];
    const textStyle = (): TextStyle => props.textStyle || 'body2';

    return (
        <TextStyled textStyle={textStyle()} color={color()} class={props.class} ref={textRef}>
            {props.translationKey
                ? t(props.translationKey, props.translationValues, props.children?.toString())
                : props.children}
        </TextStyled>
    );
};

import { Component, JSX } from 'solid-js';
import { AStyled } from './style';
import { Colors, TextStyle } from 'src/styles';
import { useTheme } from 'solid-styled-components';
import { useI18n } from '@solid-primitives/i18n';
import { Property } from 'csstype';
import { Styleable, Translateable, WithChildren } from 'src/models';
type HTMLReferrerPolicy = JSX.HTMLReferrerPolicy;

interface AProps extends Styleable, Translateable, WithChildren {
    href: string;
    asButton?: boolean;

    textStyle?: TextStyle;
    color?: keyof Colors['text'];
    target?: '_blank' | '_self';
}

export const A: Component<AProps> = props => {
    const theme = useTheme();
    const [t] = useI18n();
    const color = (): Property.Color => theme.colors.text[props.color || 'accent'];
    const textStyle = (): TextStyle => props.textStyle || 'body2';
    const rel = (): HTMLReferrerPolicy | '' => (props.target === '_blank' ? 'no-referrer' : '');
    return (
        <AStyled
            href={props.href}
            rel={rel()}
            target={props.target}
            textStyle={textStyle()}
            color={color()}
            asButton={props.asButton || false}
            class={props.class}
        >
            {props.translationKey
                ? t(props.translationKey, props.translationValues, props.children?.toString())
                : props.children}
        </AStyled>
    );
};

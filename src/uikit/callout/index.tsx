import { Component } from 'solid-js';
import { CalloutStyled } from './style';
import { Styleable, WithChildren } from 'src/models';
import { Colors } from 'src/styles';

interface CalloutProps extends Styleable, WithChildren {
    color?: keyof Colors['accent'];
}

export const Callout: Component<CalloutProps> = props => {
    return (
        <CalloutStyled color={props.color || 'orange'} class={props.class}>
            {props.children}
        </CalloutStyled>
    );
};

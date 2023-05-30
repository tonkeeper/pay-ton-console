import { Component } from 'solid-js';
import { DividerStyled } from './style';
import { Styleable } from 'src/models';

interface DividerProps extends Styleable {
    coverPadding?: string;
}

export const Divider: Component<DividerProps> = props => {
    return <DividerStyled coverPadding={props.coverPadding} class={props.class} />;
};

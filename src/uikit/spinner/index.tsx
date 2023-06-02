import { Component } from 'solid-js';
import { SpinnerStyled } from './style';
import { Styleable } from 'src/models';

export const Spinner: Component<Styleable> = props => {
    return <SpinnerStyled class={props.class} />;
};

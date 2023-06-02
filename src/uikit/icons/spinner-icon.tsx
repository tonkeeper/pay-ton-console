import { Component } from 'solid-js';
import { Styleable } from 'src/models';

export const SpinnerIcon: Component<Styleable> = props => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={props.class}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12.75C17.7868 12.75 12.75 17.7868 12.75 24C12.75 30.2132 17.7868 35.25 24 35.25C30.2132 35.25 35.25 30.2132 35.25 24C35.25 23.5858 35.5858 23.25 36 23.25C36.4142 23.25 36.75 23.5858 36.75 24C36.75 31.0416 31.0416 36.75 24 36.75C16.9584 36.75 11.25 31.0416 11.25 24C11.25 16.9584 16.9584 11.25 24 11.25C24.4142 11.25 24.75 11.5858 24.75 12C24.75 12.4142 24.4142 12.75 24 12.75Z"
                fill="#7E868F"
            />
        </svg>
    );
};

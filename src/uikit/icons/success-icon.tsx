import { Component } from 'solid-js';
import { Styleable } from 'src/models';

export const SuccessIcon: Component<Styleable> = props => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={props.class}
        >
            <rect width="32" height="32" rx="16" fill="#15AD61" fill-opacity="0.16" />
            <circle cx="16" cy="16" r="9" fill="#15AD61" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.2803 13.2197C20.5732 13.5126 20.5732 13.9874 20.2803 14.2803L15.0303 19.5303C14.7374 19.8232 14.2626 19.8232 13.9697 19.5303L11.7197 17.2803C11.4268 16.9874 11.4268 16.5126 11.7197 16.2197C12.0126 15.9268 12.4874 15.9268 12.7803 16.2197L14.5 17.9393L19.2197 13.2197C19.5126 12.9268 19.9874 12.9268 20.2803 13.2197Z"
                fill="white"
            />
        </svg>
    );
};

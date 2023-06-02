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
            <g clip-path="url(#clip0_1128_60510)">
                <circle cx="16" cy="16" r="16" fill="#15AD61" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.7071 12.2929C23.0976 12.6834 23.0976 13.3166 22.7071 13.7071L14.7071 21.7071C14.3166 22.0976 13.6834 22.0976 13.2929 21.7071L9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929C9.68342 15.9024 10.3166 15.9024 10.7071 16.2929L14 19.5858L21.2929 12.2929C21.6834 11.9024 22.3166 11.9024 22.7071 12.2929Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_1128_60510">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

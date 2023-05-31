import { Component } from 'solid-js';
import { Styleable } from 'src/models';
import { Colors } from 'src/styles';
import { useTheme } from 'solid-styled-components';
import { Property } from 'csstype';

export interface ArrowIconProps extends Styleable {
    direction?: 'right' | 'left' | 'bottom' | 'top';
    color?: keyof Colors['icon'];
}

const angels = {
    right: '0',
    bottom: '90',
    left: '180',
    top: '270'
};

export const ArrowIcon: Component<ArrowIconProps> = props => {
    const theme = useTheme();
    const color = (): Property.Color => theme.colors.icon[props.color || 'tertiary'];

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={props.class}
        >
            <g transform={`rotate(${angels[props.direction || 'right']} 8 8)`}>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.27324 3.17107C6.59298 2.90775 7.06565 2.9535 7.32897 3.27324L10.829 7.52324C11.057 7.80019 11.057 8.19986 10.829 8.4768L7.32897 12.7268C7.06565 13.0465 6.59298 13.0923 6.27324 12.829C5.9535 12.5656 5.90776 12.093 6.17107 11.7732L9.27843 8.00002L6.17107 4.2268C5.90775 3.90706 5.9535 3.43439 6.27324 3.17107Z"
                    fill={color()}
                />
            </g>
        </svg>
    );
};

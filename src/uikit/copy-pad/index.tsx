import { Component } from 'solid-js';
import { CopyPadStyled } from './style';
import { Button, CopyIcon } from 'src/uikit';
import { copyToClipboard } from 'src/utils';
import { Styleable } from 'src/models';

export interface CopyPadProps extends Styleable {
    text: string;
}

export const CopyPad: Component<CopyPadProps> = props => {
    return (
        <CopyPadStyled class={props.class}>
            <span>{props.text}</span>
            <Button
                appearance="flat"
                width="fit-content"
                onClick={() => copyToClipboard(props.text)}
            >
                <CopyIcon />
            </Button>
        </CopyPadStyled>
    );
};

import { Component, Show } from 'solid-js';
import { CopiedBadgeStyled, CopyPadStyled } from './style';
import { CopyIcon } from 'src/uikit';
import { Styleable } from 'src/models';
import { createCopyToClipboard } from 'src/hooks';
import { Transition } from 'solid-transition-group';

export interface CopyPadProps extends Styleable {
    text: string;
}

export const CopyPad: Component<CopyPadProps> = props => {
    const [copied, onCopy] = createCopyToClipboard(() => props.text);

    return (
        <CopyPadStyled class={props.class} onClick={onCopy}>
            <span>{props.text}</span>
            <CopyIcon />
            <Transition
                onBeforeEnter={el => {
                    el.animate(
                        [
                            { opacity: 0, transform: 'translateX(-50%) translateY(10px)' },
                            { opacity: 1, transform: 'translateX(-50%) translateY(0)' }
                        ],
                        {
                            duration: 200
                        }
                    );
                }}
                onExit={(el, done) => {
                    const a = el.animate(
                        [
                            { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
                            { opacity: 0, transform: 'translateX(-50%) translateY(10px)' }
                        ],
                        {
                            duration: 200
                        }
                    );
                    a.finished.then(done);
                }}
            >
                <Show when={copied()}>
                    <CopiedBadgeStyled>Copied!</CopiedBadgeStyled>
                </Show>
            </Transition>
        </CopyPadStyled>
    );
};

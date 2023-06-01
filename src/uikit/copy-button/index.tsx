import { Component, Show } from 'solid-js';
import { CopyIcon } from 'src/uikit';
import { CopiedBadgeStyled, CopyButtonStyled } from './style';
import { Transition } from 'solid-transition-group';
import { createCopyToClipboard } from 'src/hooks';
import { Styleable } from 'src/models';

interface CopyButtonProps extends Styleable {
    text: string;
}

export const CopyButton: Component<CopyButtonProps> = props => {
    const [copied, onCopy] = createCopyToClipboard(() => props.text);

    return (
        <CopyButtonStyled
            appearance="flat"
            width="fit-content"
            onClick={onCopy}
            class={props.class}
        >
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
        </CopyButtonStyled>
    );
};

import { Component, Show } from 'solid-js';
import { Button, CopyIcon } from 'src/uikit';
import { CopiedBadgeStyled, CopyButtonContainer } from './style';
import { Transition } from 'solid-transition-group';
import { createCopyToClipboard } from 'src/hooks';
import { Styleable } from 'src/models';
import { Translation } from '../typography';
import { Property } from 'csstype';

interface CopyButtonProps extends Styleable {
    text: string;

    position?: 'bottom' | 'bottom-left';
}

export const CopyButton: Component<CopyButtonProps> = props => {
    const [copied, onCopy] = createCopyToClipboard(() => props.text);

    const position = (): 'bottom' | 'bottom-left' => props.position || 'bottom';
    const startTransform = (): Property.Transform =>
        position() === 'bottom' ? 'translateX(-50%) translateY(10px)' : 'translateY(10px)';

    const endTransform = (): Property.Transform =>
        position() === 'bottom' ? 'translateX(-50%) translateY(0)' : 'translateY(0)';

    return (
        <CopyButtonContainer class={props.class}>
            <Button appearance="flat" width="fit-content" onClick={onCopy}>
                <CopyIcon />
            </Button>
            <Transition
                onBeforeEnter={el => {
                    el.animate(
                        [
                            { opacity: 0, transform: startTransform() },
                            { opacity: 1, transform: endTransform() }
                        ],
                        {
                            duration: 200
                        }
                    );
                }}
                onExit={(el, done) => {
                    const a = el.animate(
                        [
                            { opacity: 1, transform: endTransform() },
                            { opacity: 0, transform: startTransform() }
                        ],
                        {
                            duration: 200
                        }
                    );
                    a.finished.then(done);
                }}
            >
                <Show when={copied()}>
                    <CopiedBadgeStyled position={position()}>
                        <Translation translationKey="common.copied">Copied!</Translation>
                    </CopiedBadgeStyled>
                </Show>
            </Transition>
        </CopyButtonContainer>
    );
};

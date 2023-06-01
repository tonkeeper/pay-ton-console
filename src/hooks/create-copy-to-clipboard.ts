import { Accessor, createSignal } from 'solid-js';
import { copyToClipboard } from 'src/utils';

export function createCopyToClipboard(
    value: Accessor<string>,
    delay = 2000
): [Accessor<boolean>, () => void] {
    const [copied, setCopied] = createSignal(false);

    let lastCopyTimeout: ReturnType<typeof setTimeout> | undefined;
    const onCopy = async (): Promise<void> => {
        clearTimeout(lastCopyTimeout);
        await copyToClipboard(value());
        setCopied(true);
        lastCopyTimeout = setTimeout(() => setCopied(false), delay);
    };

    return [copied, onCopy];
}

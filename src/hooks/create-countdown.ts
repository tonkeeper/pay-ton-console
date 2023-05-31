import { createEffect, createSignal } from 'solid-js';

export function createCountdown(initialNumber: number, timeoutMS = 1000): () => number {
    const [value, setValue] = createSignal(initialNumber);

    createEffect(() => {
        const interval = setInterval(
            () =>
                setValue(v => {
                    if (v <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return v - 1;
                }),
            timeoutMS
        );
    });

    return value;
}

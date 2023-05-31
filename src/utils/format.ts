export function sliceAddress(
    address: string,
    options?: { startSymbols: number; endSymbols?: number }
): string {
    const startSymbols = options?.startSymbols || 6;
    const endSymbols = options?.endSymbols || 6;

    return address.slice(0, startSymbols) + '…' + address.slice(-endSymbols);
}

export function secondsToMMSS(seconds: number): string {
    const toDD = (val: number): string => {
        const str = val.toString();
        return str.length === 2 ? str : `0${str}`;
    };

    const minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    return `${toDD(minutes)}:${toDD(seconds)}`;
}

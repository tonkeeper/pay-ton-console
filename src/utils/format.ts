export function sliceAddress(
    address: string,
    options?: { startSymbols: number; endSymbols?: number }
): string {
    const startSymbols = options?.startSymbols || 6;
    const endSymbols = options?.endSymbols || 6;

    return address.slice(0, startSymbols) + '…' + address.slice(-endSymbols);
}

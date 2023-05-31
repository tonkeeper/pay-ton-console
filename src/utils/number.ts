export function toPrecision(value: number | string, precision = 2): number {
    const exp = 10 ** precision;
    return Math.round(Number(value) * exp) / exp;
}

export function fromNano(value: string | number, decimals = 9): number {
    return Number(value) / 10 ** decimals;
}

export function toNano(value: string | number, decimals = 9): number {
    return Number(value) * 10 ** decimals;
}

import { createResource } from 'solid-js';
import { toPrecision, withTonApiBaseUrl } from 'src/utils';

export const [tonPrice] = createResource<string>(async () => {
    const result = await (
        await fetch(withTonApiBaseUrl('/rates?tokens=ton&currencies=usd'))
    ).json();

    return result.rates.TON.prices.USD;
});

export const toUsd = (tonValue: string | number, precision = 2): string => {
    const price = tonPrice();
    if (!price) {
        return '';
    }

    return toPrecision(Number(price) * Number(tonValue), precision).toString();
};

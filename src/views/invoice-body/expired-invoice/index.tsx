import { Component } from 'solid-js';
import { Callout, Translation } from 'src/uikit';

export const ExpiredInvoice: Component = () => (
    <Callout class="mb-4">
        <Translation translationKey="invoiceCard.invoiceExpired">
            The time for payment has expired, repeat the order.
        </Translation>
    </Callout>
);

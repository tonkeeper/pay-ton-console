import { Component } from 'solid-js';
import { Callout, Translation } from 'src/uikit';

export const CancelledInvoice: Component = () => (
    <Callout class="mb-4">
        <Translation translationKey="invoiceCard.invoiceCancelled">
            This invoice has been canceled.
        </Translation>
    </Callout>
);

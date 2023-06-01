import { Component } from 'solid-js';
import { Callout } from 'src/uikit';

export const ExpiredInvoice: Component = () => (
    <Callout class="mb-4">The time for payment has expired, repeat the order.</Callout>
);

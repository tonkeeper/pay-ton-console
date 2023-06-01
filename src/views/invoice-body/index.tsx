import { Component, Match, Switch } from 'solid-js';
import { currentInvoice } from 'src/state';
import { PaidInvoice } from './paid-invoice';
import { Payment } from '../payment';
import { CancelledInvoice } from './cancelled-invoice';
import { ExpiredInvoice } from './expired-invoice';

export const InvoiceBody: Component = () => {
    return (
        <Switch>
            <Match when={currentInvoice()!.status === 'success'}>
                <PaidInvoice />
            </Match>
            <Match when={currentInvoice()!.status === 'expired'}>
                <ExpiredInvoice />
            </Match>
            <Match when={currentInvoice()!.status === 'cancelled'}>
                <CancelledInvoice />
            </Match>
            <Match when={currentInvoice()!.status === 'pending'}>
                <Payment />
            </Match>
        </Switch>
    );
};

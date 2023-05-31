import { Component, createSignal, Match, Switch } from 'solid-js';
import {
    CopyAddressPaymentMethod,
    DefaultPaymentMethod,
    PaymentMethodsList,
    QrPaymentMethod,
    TonConnectPaymentMethod
} from './payment-methods';

type PaymentMethod = 'default' | 'list' | 'ton-connect' | 'qr' | 'copy-address';

export const Payment: Component = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] =
        createSignal<PaymentMethod>('default');
    return (
        <Switch>
            <Match when={selectedPaymentMethod() === 'default'}>
                <DefaultPaymentMethod onShowMethodsClick={() => setSelectedPaymentMethod('list')} />
            </Match>
            <Match when={selectedPaymentMethod() === 'list'}>
                <PaymentMethodsList onPaymentMethodSelected={setSelectedPaymentMethod} />
            </Match>
            <Match when={selectedPaymentMethod() === 'ton-connect'}>
                <TonConnectPaymentMethod
                    onOpenTonConnectMenu={() => setSelectedPaymentMethod('ton-connect')}
                    onBackClick={() => setSelectedPaymentMethod('list')}
                />
            </Match>
            <Match when={selectedPaymentMethod() === 'qr'}>
                <QrPaymentMethod onBackClick={() => setSelectedPaymentMethod('list')} />
            </Match>
            <Match when={selectedPaymentMethod() === 'copy-address'}>
                <CopyAddressPaymentMethod onBackClick={() => setSelectedPaymentMethod('list')} />
            </Match>
        </Switch>
    );
};

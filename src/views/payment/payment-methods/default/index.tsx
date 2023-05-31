import { Component } from 'solid-js';
import { A, Button, QrCode, Text } from 'src/uikit';
import { generatePaymentLink } from 'src/utils/ton-payment';
import { currentInvoice } from 'src/state';
import { LINKS } from "src/constants";

interface DefaultPaymentMethodProps {
    onShowMethodsClick: () => void;
}

export const DefaultPaymentMethod: Component<DefaultPaymentMethodProps> = props => {
    const paymentLink = (): string =>
        generatePaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);

    return (
        <>
            <Text color="secondary">Scan the code below with a camera in your TON wallet.</Text>
            <A href={LINKS.PAY_VIA_QR_DOCS} target="_blank" class="mb-3 block">
                How to pay
            </A>
            <QrCode src={paymentLink()} class="mb-3" />

            <A href={paymentLink()}>
                <Button class="mb-3">Pay</Button>
            </A>
            <Button class="mb-4" appearance="secondary" onClick={props.onShowMethodsClick}>
                Show all payment methods
            </Button>
        </>
    );
};

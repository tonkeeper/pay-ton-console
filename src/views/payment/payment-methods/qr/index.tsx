import { Component } from 'solid-js';
import { generatePaymentLink } from 'src/utils/ton-payment';
import { currentInvoice } from 'src/state';
import { A, ArrowIcon, Button, Flex, QrCode, Text } from 'src/uikit';
import { copyToClipboard } from 'src/utils';
import { LINKS } from 'src/constants';

interface QrPaymentMethodProps {
    onBackClick: () => void;
}

export const QrPaymentMethod: Component<QrPaymentMethodProps> = props => {
    const paymentLink = (): string =>
        generatePaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);

    return (
        <>
            <Button
                width="fit-content"
                appearance="flat"
                class="mb-4"
                onClick={() => props.onBackClick()}
            >
                <Flex alignItems="center" gap="6px">
                    <ArrowIcon direction="left" color="primary" />
                    Back
                </Flex>
            </Button>
            <Text color="secondary">Scan the code below with a camera in your TON wallet.</Text>
            <A href={LINKS.PAY_VIA_QR_DOCS} target="_blank" class="mb-3 block">
                How to pay
            </A>
            <QrCode src={paymentLink()} showCopyButton={false} class="mb-3" />

            <A href={paymentLink()}>
                <Button class="mb-3">Pay</Button>
            </A>
            <Button
                class="mb-4"
                appearance="secondary"
                onClick={() => copyToClipboard(paymentLink())}
            >
                Copy link
            </Button>
        </>
    );
};

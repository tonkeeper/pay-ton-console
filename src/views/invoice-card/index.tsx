import { Component, Show } from 'solid-js';
import { InvoiceCardStyled, SupportButtonStyled } from './style';
import { A, Button, Divider, Flex, H4, QrCode, Text } from 'src/uikit';
import { TelegramIcon } from 'src/uikit/icons';
import { tonPrice, toUsd } from 'src/state';
import { Invoice } from 'src/models/invoice';
import { fromNano } from 'src/utils';
import { generatePaymentLink } from 'src/utils/ton-payment';

interface InvoiceCardProps {
    invoice: Invoice;
}

export const InvoiceCard: Component<InvoiceCardProps> = props => {
    const paymentLink = (): string =>
        generatePaymentLink(props.invoice.tonAmount, props.invoice.receiverAddress); // TODO адрес получателя

    return (
        <InvoiceCardStyled>
            <H4>Invoice</H4>
            <Text class="mb-3" color="secondary">
                Netflix
            </Text>
            <Divider class="mb-4" coverPadding="24px" />
            <Flex justifyContent="space-between" class="mb-3">
                <Show when={props.invoice.description}>
                    <Text>{props.invoice.description}</Text>
                </Show>
                <div>
                    <H4 class="mb-0">{fromNano(props.invoice.tonAmount)} TON</H4>

                    <Text color="secondary">
                        {tonPrice() ? '$' + toUsd(fromNano(props.invoice.tonAmount)) : ''}
                    </Text>
                </div>
            </Flex>
            <Divider class="mb-4" coverPadding="24px" />
            <Text color="secondary">Scan the code below with a camera in your TON wallet.</Text>
            <A href="" target="_blank" class="mb-3 block">
                How to pay
            </A>
            <QrCode src={paymentLink()} class="mb-3" />

            <A href={paymentLink()}>
                <Button class="mb-3">Pay</Button>
            </A>
            <Button class="mb-4" appearance="secondary">
                Show all payment methods
            </Button>
            <Divider coverPadding="24px" class="mb-4" />
            <SupportButtonStyled asButton={true} href="https://google.com" target="_blank">
                <Flex gap="8px">
                    <TelegramIcon />
                    <Text color="secondary">Support</Text>
                </Flex>
            </SupportButtonStyled>
        </InvoiceCardStyled>
    );
};

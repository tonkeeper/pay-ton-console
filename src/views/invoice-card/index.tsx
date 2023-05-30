import { Component } from 'solid-js';
import {InvoiceCardStyled, SupportButtonStyled} from './style';
import { A, Button, Divider, Flex, H4, QrCode, Text } from 'src/uikit';
import { TelegramIcon } from 'src/uikit/icons';

interface InvoiceCardProps {}

export const InvoiceCard: Component<InvoiceCardProps> = props => {
    return (
        <InvoiceCardStyled>
            <H4>Invoice</H4>
            <Text class="mb-3" color="secondary">
                Netflix
            </Text>
            <Divider class="mb-4" coverPadding="24px" />
            <Flex justifyContent="space-between" class="mb-3">
                <Text>Subscription payment</Text>
                <div>
                    <H4 class="mb-0">120 TON</H4>
                    <Text color="secondary">$191.70</Text>
                </div>
            </Flex>
            <Divider class="mb-4" coverPadding="24px" />
            <Text color="secondary">Scan the code below with a camera in your TON wallet.</Text>
            <A href="" target="_blank" class="mb-3 block">
                How to pay
            </A>
            <QrCode
                src="https://www.figma.com/file/IIxhmuoLr2nyTgmn56N9bz/TON-Console?type=design&node-id=948-61794&t=vzfw2YcZmHjEOYBQ-0"
                class="mb-3"
            />
            <Button class="mb-3">Pay</Button>
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

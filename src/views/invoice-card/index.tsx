import { Component, Show } from 'solid-js';
import { InvoiceCardStyled, SupportButtonStyled } from './style';
import { Button, Divider, Flex, H4, Text } from 'src/uikit';
import { TelegramIcon } from 'src/uikit/icons';
import { currentInvoice, tonPrice, toUsd } from 'src/state';
import { fromNano } from 'src/utils';
import { Payment } from '../payment';
import { LINKS } from 'src/constants';

export const InvoiceCard: Component = () => {
    return (
        <InvoiceCardStyled>
            <H4>Invoice</H4>
            <Text class="mb-3" color="secondary">
                Netflix
            </Text>
            <Divider class="mb-4" coverPadding="24px" />
            <Flex justifyContent="space-between" class="mb-3">
                <Show when={currentInvoice()!.description}>
                    <Text>{currentInvoice()!.description}</Text>
                </Show>
                <div>
                    <H4 class="mb-0">{fromNano(currentInvoice()!.tonAmount)} TON</H4>

                    <Text color="secondary">
                        {tonPrice() ? '$' + toUsd(fromNano(currentInvoice()!.tonAmount)) : ''}
                    </Text>
                </div>
            </Flex>
            <Divider class="mb-4" coverPadding="24px" />
            <Payment />
            <Divider coverPadding="24px" class="mb-4" />
            <SupportButtonStyled asButton={true} href={LINKS.SUPPORT} target="_blank">
                <Button appearance="flat">
                    <Flex gap="8px">
                        <TelegramIcon />
                        <Text color="secondary">Support</Text>
                    </Flex>
                </Button>
            </SupportButtonStyled>
        </InvoiceCardStyled>
    );
};

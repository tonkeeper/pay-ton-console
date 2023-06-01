import { Component, Show } from 'solid-js';
import { DescriptionTextStyled, InvoiceCardStyled, PriceContainerStyled, SupportButtonStyled } from "./style";
import { Button, Divider, FlashIcon, Flex, H4, Text } from 'src/uikit';
import { TelegramIcon } from 'src/uikit/icons';
import { currentInvoice, tonPrice, toUsd } from 'src/state';
import { fromNano, secondsToMMSS } from 'src/utils';
import { LINKS } from 'src/constants';
import { createCountdown } from 'src/hooks';
import { InvoiceBody } from '../invoice-body';

export const InvoiceCard: Component = () => {
    const initialSecondsLeft = (): number => {
        const value = Math.floor((currentInvoice()!.validUntil.getTime() - Date.now()) / 1000);
        if (value < 0) {
            return 0;
        }

        return value;
    };

    const secondsLeft = createCountdown(initialSecondsLeft());
    return (
        <InvoiceCardStyled>
            <Flex justifyContent="space-between" alignItems="center">
                <H4>Invoice</H4>
                <Show when={secondsLeft() > 0 && secondsLeft() < 20 * 60}>
                    <Flex gap="6px" alignItems="center">
                        <FlashIcon />
                        <Text color="secondary" mono>
                            {secondsToMMSS(secondsLeft())}
                        </Text>
                    </Flex>
                </Show>
            </Flex>
            <Text class="mb-3" color="secondary">
                Netflix
            </Text>
            <Divider class="mb-4" coverPadding="24px" />
            <Flex justifyContent="space-between" class="mb-3" gap="10px">
                <Show when={currentInvoice()!.description}>
                    <DescriptionTextStyled>{currentInvoice()!.description}</DescriptionTextStyled>
                </Show>
                <PriceContainerStyled>
                    <H4 class="mb-0">{fromNano(currentInvoice()!.tonAmount)} TON</H4>

                    <Text color="secondary">
                        {tonPrice() ? '$' + toUsd(fromNano(currentInvoice()!.tonAmount)) : ''}
                    </Text>
                </PriceContainerStyled>
            </Flex>
            <Divider class="mb-4" coverPadding="24px" />
            <InvoiceBody />
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

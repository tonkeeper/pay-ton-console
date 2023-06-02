import { Component, Show } from 'solid-js';
import {
    AmountAndDescriptionContainerStyled,
    AppNameStyled,
    DescriptionTextStyled,
    HeaderStyled,
    InvoiceCardStyled,
    PriceContainerStyled,
    TimerContainerStyled
} from './style';
import { Divider, FlashIcon, H3, H4, Text } from 'src/uikit';
import { currentInvoice, tonPrice, toUsd } from 'src/state';
import { fromNano, secondsToMMSS } from 'src/utils';
import { createCountdown } from 'src/hooks';
import { InvoiceBody } from '../invoice-body';
import { isDevice } from 'src/styles';
import { Dynamic } from 'solid-js/web';
import { Footer } from 'src/views/footer';

export const InvoiceCard: Component = () => {
    const initialSecondsLeft = (): number => {
        const value = Math.floor((currentInvoice()!.validUntil.getTime() - Date.now()) / 1000);
        if (value < 0) {
            return 0;
        }

        return value;
    };
    const secondsLeft = createCountdown(initialSecondsLeft());

    const amountHeader = isDevice('mobile') ? H3 : H4;

    return (
        <InvoiceCardStyled>
            <HeaderStyled>
                <H4 class="mb-0" translationKey="invoiceCard.invoice">
                    Invoice
                </H4>
                <Show when={secondsLeft() > 0 && secondsLeft() < 20 * 60}>
                    <TimerContainerStyled>
                        <FlashIcon />
                        <Text color="secondary" mono>
                            {secondsToMMSS(secondsLeft())}
                        </Text>
                    </TimerContainerStyled>
                </Show>
            </HeaderStyled>
            <AppNameStyled color="secondary">{currentInvoice()!.appName}</AppNameStyled>
            <Divider class="mb-4" coverPadding="24px" />
            <AmountAndDescriptionContainerStyled>
                <Show when={currentInvoice()!.description}>
                    <DescriptionTextStyled>{currentInvoice()!.description}</DescriptionTextStyled>
                </Show>
                <PriceContainerStyled>
                    <Dynamic component={amountHeader} class="mb-0">
                        {fromNano(currentInvoice()!.tonAmount)} TON
                    </Dynamic>

                    <Text color="secondary">
                        {tonPrice() ? '$' + toUsd(fromNano(currentInvoice()!.tonAmount)) : ''}
                    </Text>
                </PriceContainerStyled>
            </AmountAndDescriptionContainerStyled>
            <Divider class="mb-4" coverPadding="24px" />
            <InvoiceBody />
            <Divider coverPadding="24px" class="mb-4" />
            <Footer />
        </InvoiceCardStyled>
    );
};

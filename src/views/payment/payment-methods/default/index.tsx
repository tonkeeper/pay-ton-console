import { Component, Show } from 'solid-js';
import { A, Button, CreditCardIcon, QrCode, Text, TonIcon, Translation } from 'src/uikit';
import { generatePaymentLink } from 'src/utils/ton-payment';
import { currentInvoice, payWithTonConnect, wallet } from 'src/state';
import { LINKS } from 'src/constants';
import {
    AllMethodsButtonStyled,
    ButtonDividerStyled,
    TonConnectButtonStyled,
    WalletImgStyled
} from 'src/views/payment/payment-methods/default/style';
import { toUserFriendlyAddress } from '@tonconnect/ui';
import { getWindow, sliceAddress } from 'src/utils';

interface DefaultPaymentMethodProps {
    onShowMethodsClick: () => void;
}

export const DefaultPaymentMethod: Component<DefaultPaymentMethodProps> = props => {
    const paymentLink = (): string =>
        generatePaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);

    const sliceTonConnectAddressOptions =
        getWindow()?.innerWidth && getWindow()!.innerWidth < 345
            ? {
                  startSymbols: 2,
                  endSymbols: 4
              }
            : { startSymbols: 4, endSymbols: 4 };

    return (
        <>
            <div class="mb-3 block">
                <Text color="secondary" translationKey="payment.scanQR" class="inline">
                    Scan the code below with a camera in your TON wallet.
                </Text>
                &nbsp;
                <A href={LINKS.PAY_VIA_QR_DOCS} target="_blank">
                    <Translation translationKey="common.howToPay">How to pay</Translation>
                </A>
            </div>
            <QrCode src={paymentLink()} class="mb-3" />

            <A href={paymentLink()}>
                <Button>
                    <Translation translationKey="payment.pay">Pay</Translation>
                </Button>
            </A>
            <Show when={wallet()}>
                <TonConnectButtonStyled onClick={payWithTonConnect}>
                    <TonIcon color="contrast" />
                    <Text class="ml-1 mr-3" textStyle="label2" color="contrast">
                        TonConnect
                    </Text>
                    <ButtonDividerStyled />
                    <WalletImgStyled src={wallet()!.imageUrl} alt={wallet()!.name} />
                    <Text textStyle="label2" color="contrast">
                        {sliceAddress(
                            toUserFriendlyAddress(wallet()!.account.address),
                            sliceTonConnectAddressOptions
                        )}
                    </Text>
                </TonConnectButtonStyled>
            </Show>
            <AllMethodsButtonStyled appearance="flat" onClick={props.onShowMethodsClick}>
                <CreditCardIcon />
                <Translation translationKey="payment.allMethods">All payment methods</Translation>
            </AllMethodsButtonStyled>
        </>
    );
};

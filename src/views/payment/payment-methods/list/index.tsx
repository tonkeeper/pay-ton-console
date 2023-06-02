import { Component, Show } from 'solid-js';
import {
    A,
    ArrowIcon,
    Button,
    CopyPad,
    Flex,
    OptionButton,
    Text,
    TonIcon,
    Translation
} from 'src/uikit';
import { generateTonhubPaymentLink, generateTonkeeperPaymentLink } from 'src/utils/ton-payment';
import { currentInvoice, tonConnectUI, wallet } from 'src/state';
import { fromNano, sliceAddress } from 'src/utils';
import { toUserFriendlyAddress } from '@tonconnect/ui';
import { isDevice } from 'src/styles';
import { LINKS } from 'src/constants';

interface PaymentMethodsListProps {
    onPaymentMethodSelected: (method: 'ton-connect' | 'default') => void;
}

export const PaymentMethodsList: Component<PaymentMethodsListProps> = props => {
    const tonkeeperLink = (): string =>
        generateTonkeeperPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);
    const tonhubLink = (): string =>
        generateTonhubPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);

    const sliceOptions = isDevice('mobile')
        ? {
              startSymbols: 4,
              endSymbols: 4
          }
        : undefined;

    return (
        <>
            <Button
                width="fit-content"
                appearance="flat"
                class="mb-3"
                onClick={() => props.onPaymentMethodSelected('default')}
            >
                <Flex alignItems="center" gap="6px">
                    <ArrowIcon direction="left" color="primary" />
                    <Translation translationKey="common.back">Back</Translation>
                </Flex>
            </Button>
            <div class="mb-2">
                <Text
                    color="secondary"
                    class="inline"
                    translationKey="payment.toPerformPayment"
                    translationValues={{ amount: fromNano(currentInvoice()!.tonAmount).toString() }}
                >
                    To perform payment you need to send {fromNano(currentInvoice()!.tonAmount)} TON
                    on&nbsp;address bellow.
                </Text>
                &nbsp;
                <A href={LINKS.PAY_VIA_ADDRESS_DOCS} target="_blank">
                    <Translation translationKey="common.howToPay">How to pay</Translation>
                </A>
            </div>
            <CopyPad text={currentInvoice()!.sendToAddress} class="mb-3" />
            <ul class="mb-2">
                <Show when={wallet()}>
                    <li>
                        <OptionButton
                            leftIcon={<TonIcon />}
                            onClick={() => props.onPaymentMethodSelected('ton-connect')}
                            coverPadding={24}
                        >
                            <Flex flexWrap="wrap">
                                TonConnect ·&nbsp;
                                <Text color="secondary" mono textStyle="body1">
                                    {sliceAddress(
                                        toUserFriendlyAddress(wallet()!.account.address),
                                        sliceOptions
                                    )}
                                </Text>
                            </Flex>
                        </OptionButton>
                    </li>
                </Show>
                <li>
                    <A href={tonkeeperLink()} target="_blank" asButton={true}>
                        <OptionButton leftIcon="/images/tonkeeper.png" coverPadding={24}>
                            Tonkeeper
                        </OptionButton>
                    </A>
                </li>
                <li>
                    <A href={tonhubLink()} target="_blank" asButton={true}>
                        <OptionButton leftIcon="/images/tonhub.png" coverPadding={24}>
                            Tonhub
                        </OptionButton>
                    </A>
                </li>
                <li>
                    <OptionButton leftIcon="/images/at-wallet.png" coverPadding={24}>
                        @wallet
                    </OptionButton>
                </li>
                <Show when={!wallet()}>
                    <li>
                        <OptionButton
                            leftIcon={<TonIcon />}
                            onClick={() =>
                                tonConnectUI
                                    .connectWallet()
                                    .then(() => props.onPaymentMethodSelected('ton-connect'))
                            }
                            coverPadding={24}
                        >
                            TonConnect
                        </OptionButton>
                    </li>
                </Show>
            </ul>
        </>
    );
};

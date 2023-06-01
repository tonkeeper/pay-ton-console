import { Component, Show } from 'solid-js';
import { A, CreditCardIcon, Flex, OptionButton, QRIcon, Text, TonIcon } from 'src/uikit';
import { generateTonhubPaymentLink, generateTonkeeperPaymentLink } from 'src/utils/ton-payment';
import { currentInvoice, tonConnectUI, wallet } from 'src/state';
import { sliceAddress } from 'src/utils';
import { toUserFriendlyAddress } from '@tonconnect/ui';

interface PaymentMethodsListProps {
    onPaymentMethodSelected: (method: 'ton-connect' | 'qr' | 'copy-address') => void;
}

export const PaymentMethodsList: Component<PaymentMethodsListProps> = props => {
    const tonkeeperLink = (): string =>
        generateTonkeeperPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);
    const tonhubLink = (): string =>
        generateTonhubPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);
    return (
        <>
            <Text textStyle="label1" class="mb-3">
                Payment methods
            </Text>
            <ul class="mb-2">
                <Show when={wallet()}>
                    <li>
                        <OptionButton
                            leftIcon={<TonIcon />}
                            onClick={() => props.onPaymentMethodSelected('ton-connect')}
                            coverPadding={24}
                        >
                            <Flex>
                                TonConnect ·&nbsp;
                                <Text color="secondary" mono textStyle="body1">
                                    {sliceAddress(toUserFriendlyAddress(wallet()!.account.address))}
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
                <li>
                    <OptionButton
                        onClick={() => props.onPaymentMethodSelected('qr')}
                        leftIcon={<QRIcon />}
                        coverPadding={24}
                    >
                        Scan QR
                    </OptionButton>
                </li>
                <li>
                    <OptionButton
                        onClick={() => props.onPaymentMethodSelected('copy-address')}
                        leftIcon={<CreditCardIcon />}
                        coverPadding={24}
                    >
                        Show payment credentials
                    </OptionButton>
                </li>
            </ul>
        </>
    );
};

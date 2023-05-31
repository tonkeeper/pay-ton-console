import { Component } from 'solid-js';
import { PaymentMethodsListStyled } from './style';
import { A, CreditCardIcon, OptionButton, QRIcon, Text, TonIcon } from 'src/uikit';
import { generateTonhubPaymentLink, generateTonkeeperPaymentLink } from 'src/utils/ton-payment';
import { currentInvoice } from 'src/state';

interface PaymentMethodsListProps {
    onPaymentMethodSelected: (method: 'ton-connect' | 'qr' | 'copy-address') => void;
}

export const PaymentMethodsList: Component<PaymentMethodsListProps> = props => {
    const tonkeeperLink = (): string =>
        generateTonkeeperPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);
    const tonhubLink = (): string =>
        generateTonhubPaymentLink(currentInvoice()!.sendToAddress, currentInvoice()!.tonAmount);
    return (
        <PaymentMethodsListStyled>
            <Text textStyle="label1" class="mb-3">
                Payment methods
            </Text>
            <ul>
                <li>
                    <A href={tonkeeperLink()} target="_blank" asButton={true}>
                        <OptionButton leftIcon="/images/tonkeeper.png">Tonkeeper</OptionButton>
                    </A>
                </li>
                <li>
                    <A href={tonhubLink()} target="_blank" asButton={true}>
                        <OptionButton leftIcon="/images/tonhub.png">Tonhub</OptionButton>
                    </A>
                </li>
                <li>
                    <OptionButton leftIcon="/images/at-wallet.png">@wallet</OptionButton>
                </li>
                <li>
                    <OptionButton leftIcon={<TonIcon />}>TonConnect</OptionButton>
                </li>
                <li>
                    <OptionButton
                        onClick={() => props.onPaymentMethodSelected('qr')}
                        leftIcon={<QRIcon />}
                    >
                        Scan QR
                    </OptionButton>
                </li>
                <li>
                    <OptionButton
                        onClick={() => props.onPaymentMethodSelected('copy-address')}
                        leftIcon={<CreditCardIcon />}
                    >
                        Show payment credentials
                    </OptionButton>
                </li>
            </ul>
        </PaymentMethodsListStyled>
    );
};

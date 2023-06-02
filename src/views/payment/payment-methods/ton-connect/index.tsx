import { Component } from 'solid-js';
import { ArrowIcon, Button, CopyButton, Flex, Text, TonIcon, Translation } from 'src/uikit';
import {
    ChangeWalletButtonStyled,
    WalletImageStyled,
    WalletInfoStyled
} from 'src/views/payment/payment-methods/ton-connect/style';
import { payWithTonConnect, tonConnectUI, wallet } from 'src/state';
import { toUserFriendlyAddress } from '@tonconnect/ui';
import { sliceAddress } from 'src/utils';

interface TonConnectPaymentMethodProps {
    onBackClick: () => void;
    onOpenTonConnectMenu: () => void;
}

export const TonConnectPaymentMethod: Component<TonConnectPaymentMethodProps> = props => {
    const userFriendlyAddress = (): string => toUserFriendlyAddress(wallet()!.account.address);

    const onDisconnectClick = async (): Promise<void> => {
        props.onBackClick();
        await tonConnectUI.disconnect();
        await tonConnectUI.connectWallet();
        props.onOpenTonConnectMenu();
    };

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
                    <Translation translationKey="common.back">Back</Translation>
                </Flex>
            </Button>
            <WalletInfoStyled>
                <WalletImageStyled src={wallet()!.imageUrl} />
                <Flex flexDirection="column" gap="2px">
                    <Text textStyle="label2">{wallet()!.name}</Text>
                    <Flex gap="8px">
                        <Text textStyle="body2" mono>
                            {sliceAddress(userFriendlyAddress())}
                        </Text>
                        <CopyButton text={userFriendlyAddress()} />
                    </Flex>
                </Flex>
            </WalletInfoStyled>
            <Button class="mb-3" onClick={payWithTonConnect}>
                <Flex gap="6px" justifyContent="center" alignItems="center">
                    <TonIcon color="contrast" />
                    <Translation translationKey="payment.pay">Pay</Translation>
                </Flex>
            </Button>
            <ChangeWalletButtonStyled appearance="secondary" onClick={onDisconnectClick}>
                <Translation translationKey="payment.changeWallet">
                    Change connected wallet
                </Translation>
            </ChangeWalletButtonStyled>
        </>
    );
};

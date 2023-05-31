import { Component } from 'solid-js';
import { ArrowIcon, Button, CopyIcon, Flex, Text, TonIcon } from 'src/uikit';
import {
    ChangeWalletButtonStyled,
    WalletImageStyled,
    WalletInfoStyled
} from 'src/views/payment/payment-methods/ton-connect/style';
import { currentInvoice, tonConnectUI, wallet } from 'src/state';
import { toUserFriendlyAddress } from '@tonconnect/ui';
import { copyToClipboard, sliceAddress } from 'src/utils';

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

    const onPay = (): void => {
        tonConnectUI.sendTransaction(
            {
                validUntil: Math.round(Date.now() / 1000) + 360,
                messages: [
                    {
                        address: currentInvoice()!.sendToAddress,
                        amount: currentInvoice()!.tonAmount
                    }
                ]
            },
            {
                modals: 'all',
                notifications: []
            }
        );
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
                    Back
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
                        <Button
                            appearance="flat"
                            width="fit-content"
                            onClick={() => copyToClipboard(userFriendlyAddress())}
                        >
                            <CopyIcon />
                        </Button>
                    </Flex>
                </Flex>
            </WalletInfoStyled>
            <Button class="mb-3" onClick={onPay}>
                <Flex gap="6px" justifyContent="center" alignItems="center">
                    <TonIcon color="contrast" />
                    Pay
                </Flex>
            </Button>
            <ChangeWalletButtonStyled appearance="secondary" onClick={onDisconnectClick}>
                Change connected wallet
            </ChangeWalletButtonStyled>
        </>
    );
};

import { Component } from 'solid-js';
import { A, ArrowIcon, Button, CopyPad, Flex, Text } from 'src/uikit';
import { currentInvoice } from 'src/state';
import { LINKS } from "src/constants";

interface CopyAddressPaymentMethodProps {
    onBackClick: () => void;
}

export const CopyAddressPaymentMethod: Component<CopyAddressPaymentMethodProps> = props => {
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
            <Text color="secondary" class="mb-4">
                To perform payment you need to send 120 TON on address below.{' '}
                <A href={LINKS.PAY_VIA_ADDRESS_DOCS} target="_blank">
                    How to pay
                </A>
            </Text>
            <Text textStyle="label2" color="secondary" class="mb-2">
                Recipient address
            </Text>
            <CopyPad text={currentInvoice()!.sendToAddress} class="mb-4" />
        </>
    );
};

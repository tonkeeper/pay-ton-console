import { Component } from 'solid-js';
import { Flex, SuccessIcon } from 'src/uikit';
import { PaidInvoiceTextStyled } from './style';

export const PaidInvoice: Component = () => {
    return (
        <Flex flexDirection="column" alignItems="center">
            <SuccessIcon class="mb-2" />
            <PaidInvoiceTextStyled textStyle="label2">Successful payment!</PaidInvoiceTextStyled>
        </Flex>
    );
};

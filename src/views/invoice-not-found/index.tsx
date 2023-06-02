import { Component } from 'solid-js';
import { InvoiceNotFoundStyled, NotFoundIconStyled, TextContainerStyled } from './style';
import { Divider, Text } from 'src/uikit';
import { Footer } from 'src/views/footer';

export const InvoiceNotFound: Component = () => {
    return (
        <InvoiceNotFoundStyled>
            <NotFoundIconStyled />
            <TextContainerStyled>
                <Text
                    textStyle="label1"
                    class="mb-2"
                    translationKey="invoiceCard.invoiceNotFoundHeader"
                >
                    Invoice not found
                </Text>
                <Text
                    textStyle="body2"
                    color="secondary"
                    translationKey="invoiceCard.invoiceNotFoundDescription"
                >
                    The invoice you are looking for was either removed or doesn’t exist.
                </Text>
            </TextContainerStyled>
            <Divider coverPadding="24px" class="mb-4" />
            <Footer />
        </InvoiceNotFoundStyled>
    );
};

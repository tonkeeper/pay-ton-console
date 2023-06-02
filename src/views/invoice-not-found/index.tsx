import { Component } from 'solid-js';
import { InvoiceNotFoundStyled, SupportButtonStyled, TextContainerStyled } from './style';
import { Button, Divider, Flex, Text } from 'src/uikit';
import { TelegramIcon } from 'src/uikit/icons';
import { LINKS } from 'src/constants';

export const InvoiceNotFound: Component = () => {
    return (
        <InvoiceNotFoundStyled>
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
            <SupportButtonStyled asButton={true} href={LINKS.SUPPORT} target="_blank">
                <Button appearance="flat">
                    <Flex gap="8px">
                        <TelegramIcon />
                        <Text color="secondary" translationKey="common.support">
                            Support
                        </Text>
                    </Flex>
                </Button>
            </SupportButtonStyled>
        </InvoiceNotFoundStyled>
    );
};

import { Component } from 'solid-js';
import { Button, Flex, LanguageSelect, TelegramIcon, Text } from 'src/uikit';
import { SupportButtonStyled } from './style';
import { LINKS } from 'src/constants';

export const Footer: Component = () => {
    return (
        <Flex justifyContent="space-between">
            <LanguageSelect />
            <SupportButtonStyled asButton={true} href={LINKS.SUPPORT} target="_blank">
                <Button appearance="flat">
                    <Flex gap="8px" alignItems="center">
                        <TelegramIcon />
                        <Text textStyle="label2" color="secondary" translationKey="common.support">
                            Support
                        </Text>
                    </Flex>
                </Button>
            </SupportButtonStyled>
        </Flex>
    );
};

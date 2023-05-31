import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';
import { Button, Flex } from 'src/uikit';

export const WalletImageStyled = styled.img`
    height: 44px;
    width: 44px;
    border-radius: ${borderRadius.md};
`;

export const WalletInfoStyled = styled(Flex)`
    gap: 12px;
    margin-bottom: 24px;
`;

export const ChangeWalletButtonStyled = styled(Button)`
    margin-bottom: 24px;
`;

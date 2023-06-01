import { styled } from 'solid-styled-components';
import { Button } from 'src/uikit';
import { media, mediaMax } from 'src/styles';

export const TonConnectButtonStyled = styled(Button)`
    margin-top: 12px;
    background-color: #31a6f5;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media('mobile')} {
        padding: 12px 8px;
    }

    ${mediaMax(360)} {
        & > :first-child {
            display: none;
        }
    }
`;

export const AllMethodsButtonStyled = styled(Button)`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 18px auto;
    gap: 10px;
`;

export const ButtonDividerStyled = styled.div`
    background-color: ${props => props.theme!.colors.constant.white};
    opacity: 0.32;
    border-radius: 1px;
    width: 1px;
    height: 16px;
`;

export const WalletImgStyled = styled.img`
    height: 24px;
    width: 24px;
    border-radius: 6px;
    margin-left: 12px;
    margin-right: 8px;
`;

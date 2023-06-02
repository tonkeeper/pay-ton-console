import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';
import { A, NotFoundIcon } from 'src/uikit';

export const InvoiceNotFoundStyled = styled.div`
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.lg};
    max-width: 420px;
    padding: 16px 24px;
`;

export const NotFoundIconStyled = styled(NotFoundIcon)`
    margin: 8px auto 12px;
    display: block;
`;

export const SupportButtonStyled = styled(A)`
    display: block;
    margin: 0 auto 4px;
    width: fit-content;
`;

export const TextContainerStyled = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

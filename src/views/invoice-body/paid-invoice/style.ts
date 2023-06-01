import { styled } from 'solid-styled-components';
import { Text } from 'src/uikit';

export const PaidInvoiceTextStyled = styled(Text)`
    color: ${props => props.theme!.colors.accent.green};
    margin-bottom: 16px;
`;

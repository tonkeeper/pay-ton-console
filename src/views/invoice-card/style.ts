import { styled } from 'solid-styled-components';
import { borderRadius, media } from 'src/styles';
import { Text } from 'src/uikit';

export const InvoiceCardStyled = styled.div`
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.lg};
    max-width: 420px;
    width: 100%;
    padding: 16px 24px;
`;

export const DescriptionTextStyled = styled(Text)`
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    padding-top: 4px;

    ${media('mobile')} {
        padding-top: 0;
        text-align: center;
    }
`;

export const PriceContainerStyled = styled.div`
    flex-shrink: 0;

    ${media('mobile')} {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        justify-content: center;
    }
`;

export const HeaderStyled = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 4px;

    ${media('mobile')} {
        justify-content: center;
    }
`;

export const TimerContainerStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 6px;
    align-items: center;
    height: 32px;

    ${media('mobile')} {
        justify-content: center;
    }
`;

export const AppNameStyled = styled(Text)`
    margin-bottom: 12px;

    ${media('mobile')} {
        text-align: center;
        margin-bottom: 16px;
    }
`;

export const AmountAndDescriptionContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;

    ${media('mobile')} {
        flex-direction: column-reverse;
        margin-bottom: 16px;
    }
`;

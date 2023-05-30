import { styled } from 'solid-styled-components';

export const DividerStyled = styled.hr<{ coverPadding?: string }>`
    height: 1px;
    border: none;
    background-color: ${props => props.theme!.colors.background.contentTint};
    width: ${props => (props.coverPadding ? 'auto' : '100%')};
    margin-left: ${props => (props.coverPadding ? `-${props.coverPadding}` : 'unset')};
    margin-right: ${props => (props.coverPadding ? `-${props.coverPadding}` : 'unset')};
`;

import { styled } from 'solid-styled-components';
import { Property } from 'csstype';
export const Flex = styled.div<{
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    flexDirection?: Property.FlexDirection;
    flexWrap?: Property.FlexWrap;
    gap?: Property.Gap;
}>`
    display: flex;
    align-items: ${props => props.alignItems || 'unset'};
    justify-content: ${props => props.justifyContent || 'unset'};
    flex-direction: ${props => props.flexDirection || 'row'};
    flex-wrap: ${props => props.flexWrap || 'unset'};
    gap: ${props => props.gap || 'unset'};
`;

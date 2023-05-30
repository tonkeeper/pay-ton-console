import { Component, JSXElement } from 'solid-js';
import { HeadingStyled, PageOverlayStyled } from './style';
import { ConsoleIcon } from 'src/uikit/icons';
import { H3 } from 'src/uikit';

interface PageOverlayProps {
    children: JSXElement;
}

export const PageOverlay: Component<PageOverlayProps> = props => {
    return (
        <PageOverlayStyled>
            <HeadingStyled>
                <ConsoleIcon />
                <H3>Console</H3>
            </HeadingStyled>
            {props.children}
        </PageOverlayStyled>
    );
};

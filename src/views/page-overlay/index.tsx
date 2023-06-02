import { Component, createEffect, JSXElement } from 'solid-js';
import { HeadingStyled, PageOverlayStyled } from './style';
import { ConsoleIcon } from 'src/uikit/icons';
import { H3 } from 'src/uikit';
import { useI18n } from '@solid-primitives/i18n';
import { locale } from 'src/state';

interface PageOverlayProps {
    children: JSXElement;
}

export const PageOverlay: Component<PageOverlayProps> = props => {
    const [_, { locale: setLang }] = useI18n();
    createEffect(() => setLang(locale()));

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

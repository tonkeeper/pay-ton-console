import type { Component } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';
import { i18nDictionary } from './i18n';
import { themeState, locale, currentInvoice } from 'src/state';
import { GlobalStyles } from 'src/styles';
import './styles/style.d.ts';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { fixMobileSafariActiveTransition } from 'src/utils';
import { InvoiceCard, PageOverlay, InvoiceNotFound } from 'src/views';
import { Match, Switch } from 'solid-js';

const App: Component = () => {
    const translations = createI18nContext(i18nDictionary, locale());

    fixMobileSafariActiveTransition();

    return (
        <I18nContext.Provider value={translations}>
            <GlobalStyles />
            <ThemeProvider theme={themeState}>
                <PageOverlay>
                    <Switch>
                        <Match when={!currentInvoice()}>
                            <InvoiceNotFound />
                        </Match>
                        <Match when={currentInvoice()}>
                            <InvoiceCard />
                        </Match>
                    </Switch>
                </PageOverlay>
            </ThemeProvider>
        </I18nContext.Provider>
    );
};

export default App;

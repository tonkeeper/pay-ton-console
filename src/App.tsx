import type { Component } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';
import { i18nDictionary } from './i18n';
import { themeState, locale } from 'src/state';
import { GlobalStyles } from 'src/styles';
import './styles/style.d.ts';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { fixMobileSafariActiveTransition } from 'src/utils';
import { InvoiceCard, PageOverlay } from 'src/views';

const App: Component = () => {
    const translations = createI18nContext(i18nDictionary, locale());

    fixMobileSafariActiveTransition();

    return (
        <I18nContext.Provider value={translations}>
            <GlobalStyles />
            <ThemeProvider theme={themeState}>
                <PageOverlay>
                    <InvoiceCard />
                </PageOverlay>
            </ThemeProvider>
        </I18nContext.Provider>
    );
};

export default App;

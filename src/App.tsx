import type { Component } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';
import { i18nDictionary } from './i18n';
import { themeState, locale } from 'src/state';
import { GlobalStyles } from 'src/styles';
import { Button, Text } from 'src/uikit';
import './styles/style.d.ts';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { fixMobileSafariActiveTransition } from 'src/utils';

const App: Component = () => {
    const translations = createI18nContext(i18nDictionary, locale());

    fixMobileSafariActiveTransition();

    return (
        <I18nContext.Provider value={translations}>
            <GlobalStyles />
            <ThemeProvider theme={themeState}>
                <Text>Hello world</Text>
                <Button width="fit-content" class="mt-2">
                    Pay
                </Button>
            </ThemeProvider>
        </I18nContext.Provider>
    );
};

export default App;

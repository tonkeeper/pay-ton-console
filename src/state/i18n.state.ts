import { createEffect, createSignal } from 'solid-js';
import { Locales, supportedLocales } from 'src/models';
import { getLocalStorage, getUserLocale, getWindow } from 'src/utils';
import { tonConnectUI } from './ton-connect.state';

const i18StoreKey = 'console-pay::preferred-lang';

export const [locale, setLocale] = createSignal<Locales>(getInitialLocale());

createEffect(() => getLocalStorage()?.setItem(i18StoreKey, locale()));
createEffect(() => {
    tonConnectUI.uiOptions = {
        language: locale()
    };
});

function getInitialLocale(): Locales {
    const urlParams = new URLSearchParams(getWindow()?.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && supportedLocales.includes(langParam as Locales)) {
        return langParam as Locales;
    }

    const storedLang = getLocalStorage()?.getItem(i18StoreKey);

    if (storedLang && supportedLocales.includes(storedLang as Locales)) {
        return storedLang as Locales;
    }

    const userLocale = getUserLocale() as Locales | undefined;
    if (!userLocale || !supportedLocales.includes(userLocale)) {
        return 'en';
    }

    return userLocale;
}

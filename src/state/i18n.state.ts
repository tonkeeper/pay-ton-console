import { createEffect, createSignal } from 'solid-js';
import { Locales, supportedLocales } from 'src/models';
import { getLocalStorage, getUserLocale } from 'src/utils';

const i18StoreKey = 'console-pay::preferred-lang';

export const [locale, setLocale] = createSignal<Locales>(getInitialLocale());

createEffect(() => getLocalStorage()?.setItem(i18StoreKey, locale()));

function getInitialLocale(): Locales {
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

import { createStore } from 'solid-js/store';
import { DefaultTheme } from 'solid-styled-components';
import { THEME, colors } from 'src/styles';
import { getLocalStorage, getSystemTheme } from 'src/utils';
import { createEffect } from 'solid-js';

const themeStoreKey = 'console-pay::preferred-lang';

export const [themeState, setThemeState] = createStore<DefaultTheme>({
    theme: getInitialTheme(),
    colors: colors
});

createEffect(() => getLocalStorage()?.setItem(themeStoreKey, themeState.theme));

function getInitialTheme(): THEME {
    const storedTheme = getLocalStorage()?.getItem(themeStoreKey);

    if (storedTheme && (storedTheme === THEME.LIGHT || storedTheme === THEME.DARK)) {
        return storedTheme as THEME;
    }

    return getSystemTheme();
}

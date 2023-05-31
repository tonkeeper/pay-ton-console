import { THEME } from 'src/styles';

export function openLink(href: string, target = '_self'): ReturnType<typeof window.open> {
    return window.open(href, target, 'noreferrer noopener');
}

export function openLinkBlank(href: string): void {
    openLink(href, '_blank');
}

export function getSystemTheme(): THEME {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEME.DARK;
    }

    return THEME.LIGHT;
}

export function subscribeToThemeChange(callback: (theme: THEME) => void): () => void {
    const handler = (event: MediaQueryListEvent): void =>
        callback(event.matches ? THEME.DARK : THEME.LIGHT);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
    return () =>
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handler);
}

export function addQueryParameter(url: string, key: string, value: string): string {
    const parsed = new URL(url);
    parsed.searchParams.append(key, value);
    return parsed.toString();
}

export function fixMobileSafariActiveTransition(): void {
    if (!document.body.hasAttribute('ontouchstart')) {
        document.body.setAttribute('ontouchstart', '');
    }
}

export function getWindow(): Window | undefined {
    if (typeof window !== 'undefined') {
        return window;
    }

    return undefined;
}

export function getLocalStorage(): Storage | undefined {
    return getWindow()?.localStorage;
}

export function getUserLocale(): string | undefined {
    const navigator = getWindow()?.navigator;
    if (!navigator) {
        return undefined;
    }

    const lang = navigator.languages?.[0] || navigator.language;
    if (!lang) {
        return undefined;
    }

    return lang.split('-')[0];
}

export function addPath(base: string, path: string): string {
    if (base.endsWith('/')) {
        base = base.slice(0, -1);
    }

    if (path.startsWith('/')) {
        path = path.slice(1);
    }

    return `${base}/${path}`;
}

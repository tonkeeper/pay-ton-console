export const supportedLocales = ['en', 'ru'] as const;

export type Locales = (typeof supportedLocales)[number];

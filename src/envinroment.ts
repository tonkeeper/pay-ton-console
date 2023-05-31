import { addPath } from 'src/utils';

export const baseUrl = import.meta.env.VITE_BASE_URL;

export function withBaseUrl(path: string): string {
    return addPath(baseUrl, path);
}

export const tonApiBaseUrl = import.meta.env.VITE_TONAPI_BASE_URL;

export function withTonApiBaseUrl(path: string): string {
    return addPath(tonApiBaseUrl, path);
}

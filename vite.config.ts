import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default ({ mode }: { mode: string }) => {
    const { VITE_BASE_PROXY_URL } = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [solidPlugin({ extensions: ['ts'] })],
        server: {
            host: '127.0.0.1',
            port: 3000,
            watch: {
                usePolling: true
            },
            proxy: {
                '/api': {
                    target: VITE_BASE_PROXY_URL,
                    changeOrigin: true,
                    secure: true,
                    cookiePathRewrite: '/',
                    headers: {
                        Connection: 'keep-alive'
                    }
                }
            }
        },
        resolve: {
            alias: {
                src: path.resolve('src/')
            }
        },
        build: {
            target: 'esnext'
        }
    });
};

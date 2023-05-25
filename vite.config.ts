import * as path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({ extensions: ['ts'] })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  build: {
    target: 'esnext',
  },
});

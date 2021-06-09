import { defineConfig } from 'vite';
import { resolve } from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), reactJsx()],
    resolve: {
        alias: {
            __: resolve(__dirname, './src'),
        },
    },
});

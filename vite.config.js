import { defineConfig } from 'vite';
import resolve from '@rollup/plugin-node-resolve';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), reactJsx()],
    build: {
        rollupOptions: {
            plugins: [
                resolve({
                    // pass custom options to the resolve plugin
                    customResolveOptions: {
                        moduleDirectory: 'node_modules',
                    },
                }),
            ],
            // indicate which modules should be treated as external
            external: ['@popperjs/core'],
        },
    },
});

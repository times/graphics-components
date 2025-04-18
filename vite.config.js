import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/lib/assets/fonts',
                    dest: '',
                },
            ],
        }),
    ],
    build: {
        lib: {
            entry: 'src/lib/components/index.jsx',
            name: 'TimesGraphicsComponents',
            fileName: (format) => `times-graphics-components.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});

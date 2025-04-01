/* eslint-disable prettier/prettier */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/index.tsx', // o .jsx si no usás TypeScript
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

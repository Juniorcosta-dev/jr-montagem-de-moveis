import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        visualizer({
            open: true, // Abre o visualizador automaticamente após a build
            filename: 'dist/stats.html', // Onde o arquivo HTML será gerado
        }),
    ],
});

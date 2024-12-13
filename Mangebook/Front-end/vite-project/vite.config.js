import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.PNG'], // Adicionando a configuração para incluir PNG
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redireciona requisições /api para o backend
    },
  },
});

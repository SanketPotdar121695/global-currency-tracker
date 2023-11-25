import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((mode) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    server: {
      proxy: {
        '/v3.1': {
          target: process.env.VITE_baseURL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/v3.1/, '')
        }
      }
    },
    plugins: [react()]
  };
});

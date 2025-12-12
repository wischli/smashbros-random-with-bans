import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/smashbros-random-with-bans/',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});

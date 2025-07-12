import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, '../../ui'),
      '@utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@api': path.resolve(__dirname, '../../packages/api/src'),
      '@mocks': path.resolve(__dirname, '../mocks'),
    },
  },
});

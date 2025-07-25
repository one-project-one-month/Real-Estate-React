import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, '../shared/ui/src'),
      '@utils': path.resolve(__dirname, '../shared/utils/src'),
      '@api': path.resolve(__dirname, '../shared/api/src'),
      '@mocks': path.resolve(__dirname, '../mocks'),
      '@types': path.resolve(__dirname, '../types'),
    },
  },
});

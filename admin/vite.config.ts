import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../shared/ui/src'),
      '@api': path.resolve(__dirname, '../shared/api/src'),
    },
  },
});

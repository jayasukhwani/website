import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  // base: '/',
  base: '/website/', //for Github
  build: {
    outDir: 'docs',
  }
});

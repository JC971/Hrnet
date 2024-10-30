// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      // Your PostCSS config will be automatically picked up if `postcss.config.js` exists
    }
  }
});

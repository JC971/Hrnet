// vite.config.js
/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      // Your PostCSS config will be automatically picked up if `postcss.config.js` exists
    }
  }
});*/
/*
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'ma-modale-react-hrnet': 'ma-modale-react-hrnet/dist/ma-modale-react-hrnet.esm.js'
    }
  }
});
*/
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});

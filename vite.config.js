// vite.config.js
import path from "path";
import { defineConfig } from 'vite'

export default defineConfig({
  // config options
  build:{
  	lib:{
  		entry: [
        path.resolve(__dirname, 'src/main.js'),
        path.resolve(__dirname, 'src/style.scss'),
      ],
  		name: 'gepestyles',
  		// Se agregará la extension apropiada.
  		fileName: 'gepestyles',
  	},
  	outDir: 'dist'

  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },

})

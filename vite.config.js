// vite.config.js
import path from "path";

export default {
  // config options
  root: './src',
  build:{
  	outDir: '../dist',
  	assetsDir:'css',
  	rollupOptions: {
  	  output: {
  	    assetFileNames: "css/gepestyles[extname]",
  	  },
  	},
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },

}

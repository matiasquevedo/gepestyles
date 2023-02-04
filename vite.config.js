// vite.config.js
export default {
  // config options
  build:{
  	assetsDir:'css',
  	rollupOptions: {
  	  output: {
  	    assetFileNames: "css/gepestyles[extname]",
  	  },
  	},
  }

}

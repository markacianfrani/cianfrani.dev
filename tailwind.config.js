module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      brand: '#d96459'
    }
  },
  corePlugins: {
    preflight: false,
  }
};

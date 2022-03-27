module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      brand: '#d96459'
    },
    extend: {}
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};

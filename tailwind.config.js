module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {

    extend: {
      colors: {
        brand: '#d96459'
      }
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito)',
      },
      boxShadow: {
        'custom': '0px 0px 20px 1px #2AD883',
      },

      colors: {
        green: {
          400: '#2AD883',
        },
      },
      screens: {
        'laptop': '900px',
        'sm-device':{'max':'320px'},
      },
      backgroundImage: {
        'section-1':"url('/assets/bg-section-1.jpg')",
        'background': "url('/assets/background.jpg')",
      }
    },
  },
  plugins: [],
}
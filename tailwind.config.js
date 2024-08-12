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
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        spinCounterclockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-360deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spinClockwise": "spinClockwise 50s linear infinite",
        "spinCounterclockwise": "spinCounterclockwise 40s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.drop-shadow-filter': {
          '-webkit-filter': 'drop-shadow(15px 14px 10px rgba(0 0 0 / 60%))',
          'filter': 'drop-shadow(15px 14px 10px rgba(0 0 0 / 60%))',
        },
      }, ['responsive']);
    },
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        chakraPetch: ['Chakra Petch', 'sans-serif'],
      },
      backgroundImage: {
        'nav-img': "url('/assets/image 1.png')",
        'bg-img': "url('/assets/image 5.png')",
        'bg-img-action': "url('/assets/img action.png')",
        'gray-img-team': "url('/assets/gradients/Group 39227.svg')",
        'mobile-img': "url('/assets/image 9.png')",
      }
    },
  },
  plugins: [],
}


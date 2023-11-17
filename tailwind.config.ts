import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    container: {
      // center: true, // This will center the container in the viewport
      padding: '4rem', // This adds a default horizontal padding  
      screens: {
        sm: '100%', // 100% width below the sm breakpoint
        md: '1280px', // 100% width until the md breakpoint
        lg: '1280px', // Max-width for lg screens and above
        xl: '1280px', // Max-width for xl screens and above
        '2xl': '1280px', // Max-width for 2xl screens and above
      },
    },
    extend: {
      colors:{
        'myblue' : '#005EB8',
        'mygray' : '#e8edee',
        'nhsblack' :'#202A30',
        'darkgrey':'#425563',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config

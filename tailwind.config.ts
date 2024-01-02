import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vBlue: '#6591b4',
        vBlue800: '#032038',
        vBlue950: '#08263f',
        vBlue1000: '#02192b',
        vTransparent: '#ffffff30'
      },
      boxShadow: {
        vShadow: '3px 3px 7px rgba(0, 0, 0, .5)'
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        handjet: ['Handjet', 'sans-serif']
      },
      width: {
        vW: '19.5rem'
      },
      screens: {
        vMScreen: '375px',
        vGScreen: '425px',
        vLaptopScreen: '1100px',
        vLaptopGScreen: '1440px'
      },
      gap: {
        vGap: '5%'
      },
      fontSize: {
        vTextXls: '11px'
      },
      transitionProperty: {
        vTransition: '.3s'
      }
    },
  },
  plugins: [],
}
export default config
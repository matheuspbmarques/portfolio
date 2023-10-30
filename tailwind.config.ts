import { slate } from 'tailwindcss/colors'
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
        blue: {
          default: '#06B6D4'
        },
        purple: {
          default: '#9747FF'
        }
      }
    }
  }
}
export default config

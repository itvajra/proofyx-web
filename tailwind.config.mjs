/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        proofyx: {
          blue: '#1e4da2',
          'blue-dark': '#153a7a',
          'blue-light': '#e6f0ff',
          green: '#00875a',
          red: '#de350b',
        },
        neutral: {
          900: '#091e42',
          800: '#172b4d',
          700: '#253858',
          600: '#42526e',
          500: '#5e6c84',
          400: '#7a869a',
          300: '#97a0af',
          200: '#dfe1e6',
          100: '#ebecf0',
          50: '#f4f5f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'enterprise': '0 4px 6px rgba(9, 30, 66, 0.05), 0 1px 3px rgba(9, 30, 66, 0.08)',
        'enterprise-hover': '0 20px 40px rgba(9, 30, 66, 0.1)',
      }
    },
  },
  plugins: [],
};

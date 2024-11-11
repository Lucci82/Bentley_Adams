import type { Config } from 'tailwindcss';
import ScrollbarPlugin from 'tailwind-scrollbar-hide';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange: '#F56630',
        'light-orange': '#FFECE5',
        'grey-100': '#F0F2F5',
        'grey-75': '#F7F9FC',
        'grey-50': '#F9FAFB',
        'grey-900': '#101928',
        'grey-500': '#667185',
        'grey-300': '#D0D5DD',
        'grey-800': '#1D2739',
        'grey-200': '#E4E7EC',
        'grey-600': '#475367',
        'grey-700': '#344054',
      },
    },
  },
  plugins: [ScrollbarPlugin],
};
export default config;

const { fontFamily } = require('tailwindcss/defaultTheme');
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './@/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: '#2A2A2A',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          hover: '#D32F2F',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: '#E1EAE0',
          foreground: 'hsl(var(--accent-foreground))',
        },
        highlight: {
          DEFAULT: '#A8DADC',
          hover: '#86C5DA',
        },
        navy: {
          DEFAULT: '#1D3557',
          hover: '#152848',
        },
        success: {
          light: '#4CAF50',
          dark: '#10B981',
        },
        warning: {
          light: '#FFC107',
          dark: '#FBBF24',
        },
        error: {
          light: '#E63946',
          dark: '#EF4444',
        },
        info: {
          light: '#A8DADC',
          dark: '#60A5FA',
        },
        background: 'hsl(var(--background))',
        'background-secondary': {
          light: '#F1FAEE',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#374151',
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        text: {
          primary: {
            light: '#3A3A3A',
            dark: '#F1FAEE',
          },
          secondary: {
            light: '#1D3557',
            dark: '#A8DADC',
          },
          muted: {
            light: '#6B7280',
            dark: '#9CA3AF',
          },
        },
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};

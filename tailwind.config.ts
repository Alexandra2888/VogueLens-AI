const { fontFamily } = require('tailwindcss/defaultTheme');
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#3A3A3A',
          hover: '#2A2A2A',
        },
        secondary: {
          DEFAULT: '#E63946',
          hover: '#D32F2F',
        },
        accent: {
          DEFAULT: '#F1FAEE',
          hover: '#E1EAE0',
        },
        highlight: {
          DEFAULT: '#A8DADC',
          hover: '#86C5DA',
        },
        navy: {
          DEFAULT: '#1D3557',
          hover: '#152848',
        },

        // Semantic Colors
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

        // Background Colors
        background: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        'background-secondary': {
          light: '#F1FAEE',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#374151',
        },

        // Text Colors
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

        // Border Colors
        border: {
          light: '#D1D5DB',
          dark: '#4B5563',
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
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

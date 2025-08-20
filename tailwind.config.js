module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Enterprise trust and technical depth
        primary: {
          DEFAULT: "#1a365d", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Secondary Colors - Professional supporting elements
        secondary: {
          DEFAULT: "#2d3748", // gray-700
          50: "#f9fafb", // gray-50
          100: "#f3f4f6", // gray-100
          200: "#e5e7eb", // gray-200
          300: "#d1d5db", // gray-300
          400: "#9ca3af", // gray-400
          500: "#6b7280", // gray-500
          600: "#4b5563", // gray-600
          700: "#374151", // gray-700
          800: "#1f2937", // gray-800
          900: "#111827", // gray-900
        },
        // Accent Colors - Data insights and interactive moments
        accent: {
          DEFAULT: "#00d4ff", // cyan-400
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#67e8f9", // cyan-300
          400: "#22d3ee", // cyan-400
          500: "#06b6d4", // cyan-500
          600: "#0891b2", // cyan-600
          700: "#0e7490", // cyan-700
          800: "#155e75", // cyan-800
          900: "#164e63", // cyan-900
        },
        // Background and Surface
        background: "#ffffff", // white
        surface: "#f7fafc", // gray-50
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600
        },
        warning: {
          DEFAULT: "#ed8936", // orange-500
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          500: "#ed8936", // orange-500
          600: "#dd6b20", // orange-600
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-100
          100: "#feb2b2", // red-200
          500: "#e53e3e", // red-500
          600: "#c53030", // red-600
        },
      },
      fontFamily: {
        // Headlines - Modern geometric clarity
        headline: ['Inter', 'sans-serif'],
        // Body - Exceptional readability
        body: ['Source Sans Pro', 'sans-serif'],
        // CTAs - Confident weight
        cta: ['Inter', 'sans-serif'],
        // Code - Developer-focused monospace
        code: ['JetBrains Mono', 'monospace'],
        // Default sans
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'prominent': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-fast': {
          'transition-duration': '200ms',
          'transition-timing-function': 'ease-out',
        },
        '.transition-normal': {
          'transition-duration': '300ms',
          'transition-timing-function': 'ease-out',
        },
        '.transition-slow': {
          'transition-duration': '400ms',
          'transition-timing-function': 'ease-out',
        },
        '.hover-lift': {
          'transition': 'transform 300ms ease-out, box-shadow 300ms ease-out',
        },
        '.hover-lift:hover': {
          'transform': 'translateY(-2px)',
          'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
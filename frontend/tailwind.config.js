/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class', // Enable dark mode by adding 'class'
    theme: {
        colors: {
            'white': '#FFFFFF',
            'black': '#121212',
            'grey': '#F3F3F3',
            'dark-grey': '#2A2A2A',
            'red': '#FF4E4E',
            'transparent': 'transparent',
            'twitter': '#1DA1F2',
            'purple': '#8B46FF',
            'primary': '#0F172A',
            'secondary': '#64748B',
            'accent': '#38BDF8',
            'dark-bg': '#0B0F19', // Premium dark mode background
            'dark-card': '#1E293B',
            'light-bg': '#F8FAFC', // Premium light mode background
            'text-light': '#F1F5F9',
            'text-dark': '#0F172A'
        },

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
              inter: ["'Inter'", "sans-serif"],
              gelasio: ["'Gelasio'", "serif"]
            },
            boxShadow: {
              'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
              'premium-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)'
            }
        },

    },
    plugins: [],
};
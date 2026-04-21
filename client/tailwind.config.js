/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lemon-green': '#D0F224',
                'gold': '#FFD700', // Reverted to Bright Gold for buttons/highlights
                'bronze': '#B8860B', // Added for Logo text matching
                'dark-bg': '#0a0a0a',
                'light-text': '#f5f5f5',
                'grey-text': '#a3a3a3'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'], // Assuming these based on the meta tags
            }
        },
    },
    plugins: [],
}

const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
        },
        extend: {
            fontFamily: {
                sans: ['Segoe UI', 'Arial', 'sans-serif', 'system-ui'],
            },
            backgroundImage: {
                locked: "url('/assets/screen-saver.png')",
                default: "url('/assets/wallpapers/img0.jpg')",
            },
        },
    },
    variants: {
        extend: {},
    },

    plugins: [],
};

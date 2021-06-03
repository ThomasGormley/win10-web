module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
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

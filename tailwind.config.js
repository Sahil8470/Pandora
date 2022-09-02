/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            white: "#ffffff",
        },
        fontSize: {
            "8xl": "6rem",
        },
        extend: {
            backgroundImage: {
                "header-bgimage": "url('../images/header-image.png')",
            },
        },
    },
    plugins: [],
};

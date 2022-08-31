/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        colors: {
            White: "#ffffff",
        },
        extend: {
            backgroundImage: {
                "header-bgimage": "url('../images/header-image.png')",
            },
        },
    },
    plugins: [],
};

module.exports = {
    content: [
        "./src/**/*.{html,ts,scss}", // Ensure SCSS files are included
    ],
    theme: {
        extend: {
            boxShadow: {
                'shadow-1': '0 16px 30px hsla(0, 0%, 0%, 0.125)',
            },
            backgroundImage: {
                "gradient-onyx":
                    "linear-gradient(to bottom right, hsl(240,1%,25%) 3%, hsl(0,0%,19%) 97%)",
            },
        },
    },
    plugins: [],
};
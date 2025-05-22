module.exports = {
    content: [
        "./src/**/*.{html,ts,scss}", // Ensure SCSS files are included
    ],
    theme: {
        extend: {
            boxShadow: {
                'shadow-1': '0 16px 30px hsla(0, 0%, 0%, 0.125)',
            },
            backgroundColor: {
                "onyx": "bg-[linear-gradient(to_bottom_right,_hsl(240,1%,20%)_3%,_hsl(0,0%,15%)_97%)]",
            },
            backgroundImage: {
                "gradient-onyx":
                "linear-gradient(to bottom right, hsl(240,1%,25%) 3%, hsl(0,0%,19%) 97%)",
            },
            textColor: {
                "onyx": "#FECE66"
            }
        },
    },
    plugins: [],
};
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            roboto: "Roboto, sans-serif",
        },
        fill: (theme) => ({
            red: theme("colors.red.primary"),
        }),
        colors: {
            white: "#ffffff",
            blue: {
                medium: "#005c98",
            },
            black: {
                light: "#262626",
                faded: "#00000059",
            },
            gray: {
                base: "#616161",
                background: "#fafafa",
                primary: "#dbdbdb",
            },
            red: {
                primary: "#ed4956",
            },
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
    plugins: [],
};
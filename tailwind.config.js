/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: [...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono],
			sansCustom: ["Ubuntu", "sans-serif"],
			cursiveCustom: ["Lobster", "cursive"],
			indieCustom: ["Indie Flower", "cursive"],
		},
		colors: {
			primary: "#006fff",
			secondary: "#e0ffff",
			light: "#ffffff",
			gray: "#9e9e9e",
			...colors,
		},
		extend: {},
	},
	plugins: [],
};

import { nextui } from "@nextui-org/react";
export const content = [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
	extend: {
		fontFamily: {
			poppins: ["var(--font-poppins)", "sans-serif"],
		},
		colors: {
			light: "#F3F3F3",
			background: "#F3F3F3",
			gray: {
				100: "#FDF7FD",
				200: "#CCCCCC",
				300: "#F7F7F7",
				400: "#FAFAFA",
			},
			primary: "#F37021",
			effect: "#E6F3F2",
			primaryColor: {
				100: "#42B8AB", // Very light teal
				200: "#80D1C9", // Light teal
				300: "#42B8A9", // Teal green
				400: "#2B9D91", // Deeper teal (aligns with top arc of logo)
				500: "#F37021",
			},
			dark: "#231834",
			text_color: "#19191D",
			secondary: {
				200: "#333",
				300: "#777",
				400: "#242424",
				500: "#848484",
				600: "#BFBFBF",
				700: "#E4E4E4",
				800: "#BDBDBD",
			},
			orange: "#FB5646",
		},
		animation: {
			"spin-slow": "spin 8s linear infinite",
		},
	},
	screens: {
		xs: "400px",
		slg: "999px", // @media (min-width: 999px
		xmd: "800px", // @media (min-width: 800px)
		...require("tailwindcss/defaultTheme").screens,
	},
};
export const plugins = [nextui()];

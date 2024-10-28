/** @type {import('tailwindcss').Config} */
module.exports = {
	
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#1A1A2E",
        e1: "#E1E1E1",
        l1: "#984DD8",
        Nwhite: "#D6DADF",
        BO: "#B0B0B0",
        l2: "#BF94E4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gold: "#EDBE38",
        off_black: "#0A0F29",
        black: "#414042",
        seaForm: "#56BDA3",
        navy: "#3A67B1",
        aqua: "#0097D7",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"], // Define Roboto as a font family
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
};

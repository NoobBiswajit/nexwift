/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      rlw: "Raleway",
    },
    extend: {
      colors: {
        dred: "#F00",
        Nblue: "#02075d",
        rpigment: "#ED1520",
        bubbles: "#E8F9FF",
      },
      boxShadow: {
        smallS: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
    },
  },
  plugins: [],
};

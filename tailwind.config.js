module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#203CEE",
          secondary: "#9FDDF5",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],

}

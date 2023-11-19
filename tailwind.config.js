/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        graphicDesignText: "hsl(167, 40%, 24%)",
        photographyText: "hsl(198, 62%, 26%)",
        footer: "hsl(168, 34%, 41%)",
        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      10: "10px",
      8: "8px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
    },
  },
  plugins: [],
};

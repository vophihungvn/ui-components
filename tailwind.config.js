const colors = require("tailwindcss/colors");

const CATEGORIES = [
  "category-1",
  "category-2",
  "category-3",
  "category-4",
  "category-5",
];

const PARTS = ["bg", "text", "border"];
const SHADES = ["", "-soft", "-light"];

const listClases = CATEGORIES.reduce((lst, category) => {
  const categoryParts = PARTS.reduce((ptList, part) => {
    const withShades = SHADES.map((shade) => `${part}-${category}${shade}`);
    ptList.push(...withShades);
    return ptList;
  }, []);
  lst.push(...categoryParts);

  return lst;
}, []);

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: listClases,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /*
        ‘category-5’: ‘#2F4B7C’,
        ‘category-5-soft’: ‘#B3C1D9’,
        ‘category-5-light’: ‘#E2E9F4’,
        */
        "category-1": {
          light: "#E8F9F7",
          soft: "#ACDAD4",
          DEFAULT: "#399A8E",
        },
        "category-2": { DEFAULT: "#5B8F4E", light: "#EDF9EB", soft: "#B6D3AD" },
        "category-3": { DEFAULT: "#8F2A79", light: "#EFE5F1", soft: "#DFC2E3" },
        "category-4": { DEFAULT: "#5151D3", light: "#EFEFFE", soft: "#B5B5E2" },
        "category-5": { DEFAULT: "#559D78", light: "#EBFCF3", soft: "#A6D6BD" },
        slate: colors.blueGray,
        magenta: {
          50: "#faf6fb",
          100: "#f5eef7",
          200: "#e7d4ea",
          300: "#d8badd",
          400: "#bb86c4",
          500: "#9E52AA",
          600: "#8e4a99",
          700: "#773e80",
          800: "#5f3166",
          900: "#4d2853",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

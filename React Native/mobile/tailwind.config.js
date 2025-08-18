import { colors } from "./src/assets/styles/colors";
import { fontFamily } from "./src/assets/styles/fontFamily";


/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors, 
      fontFamily
    },
  },
  plugins: [],
}
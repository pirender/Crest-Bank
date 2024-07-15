import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/wave.svg')",
      },
      container: {
        screens: {
          lg: '1000px', // Custom max-width for large screens
        },
      },
      colors: {
        primary: "#004080",
        secondary: "#00b3b3",
        accent: '#ffc103',
        neutral: "#f2f2f2",
        text: "#333333",
        // Add more custom colors here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
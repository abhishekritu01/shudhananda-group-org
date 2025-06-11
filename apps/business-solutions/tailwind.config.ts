// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;



import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-dark": "var(--surface-dark)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-muted": "var(--primary-muted)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "button-bg": "var(--button-bg)",
        "button-text": "var(--button-text)",
        "button-hover-bg": "var(--button-hover-bg)",
        "button-disabled-bg": "var(--button-disabled-bg)",
        "button-disabled-text": "var(--button-disabled-text)",
        "border-color": "var(--border-color)",
        "border-dark": "var(--border-dark)",
        "shadow-light": "var(--shadow-light)",
        "shadow-dark": "var(--shadow-dark)",
      },
      boxShadow: {
        light: "0px 4px 6px var(--shadow-light)",
        dark: "0px 6px 12px var(--shadow-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;


import type { Config } from "tailwindcss";
const config: Config = {
      content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
      theme: {
                extend: {
                              colors: {
                                                primary: { DEFAULT: "#00896C", foreground: "#FFFFFF" },
                                                secondary: { DEFAULT: "#F5E08C", foreground: "#000000" },
                                                success: "#006D56", warning: "#EAB308", danger: "#DC2626", background: "#F0F9F8",
                              },
                              borderRadius: { lg: "0.5rem", xl: "1rem" },
                              fontFamily: { sans: ["var(--font-noto)", "var(--font-inter)", "sans-serif"] },
                },
      },
      plugins: [],
};
export default config;

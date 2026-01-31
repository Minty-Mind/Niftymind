import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-primary": "#6858dd",
                "brand-secondary": "#319be3",
                "brand-dark": "#2f3f78",
                "bg-primary": "#0a0f0a",
                "bg-secondary": "#0d120d",
                "bg-tertiary": "#111611",
                "bg-card": "#141914",
                "text-primary": "#f8faf8",
                "text-secondary": "#b8c4b8",
                "text-muted": "#6b7a6b",
            },
            fontFamily: {
                sans: ["var(--font-unigeo)", "sans-serif"],
                system: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;

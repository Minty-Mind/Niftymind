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
                "brand-primary": "#00ff88",
                "brand-secondary": "#10ff94",
                "brand-dark": "#00cc6a",
                "bg-primary": "#0a0f0a",
                "bg-secondary": "#0d120d",
                "bg-tertiary": "#111611",
                "bg-card": "#141914",
                "text-primary": "#f8faf8",
                "text-secondary": "#b8c4b8",
                "text-muted": "#6b7a6b",
            },
        },
    },
    plugins: [],
} satisfies Config;

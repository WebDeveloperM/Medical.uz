import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
    plugins: [react()],
    server: { port: 5173 },
    resolve: {
        alias: {
            "@core": `${path.resolve(__dirname, "./src/core/")}`,
            "@dashboard": `${path.resolve(__dirname, "./src/dashboard/")}`,
            "@users": `${path.resolve(__dirname, "./src/users/")}`,
        },
    },
})

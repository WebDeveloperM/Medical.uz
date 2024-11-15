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
            "@doctors": `${path.resolve(__dirname, "./src/doctors/")}`,
            "@patients": `${path.resolve(__dirname, "./src/patients/")}`,
            "@users": `${path.resolve(__dirname, "./src/users/")}`,
            "@appointments": `${path.resolve(__dirname, "./src/appointments/")}`,

        },
    },
})

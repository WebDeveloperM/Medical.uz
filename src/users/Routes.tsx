import { Route, Routes } from "react-router-dom"
import Login from "@users/pages/Login.tsx"
import Register from "./pages/Register"

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register/*" element={<Register />} />
        </Routes>
    )
}

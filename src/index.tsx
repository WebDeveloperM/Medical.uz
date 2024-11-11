import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserRoutes from "@users/Routes.tsx"
import BaseContextProvider from "@core/components/BaseContextProvider.tsx"
import DashboardRoutes from "./dashboard/Routes"
import DoctorsRoutes from "./doctors/Routes"
import PatientsRoutes from "./patients/Routes"
import AppointmentsRoutes from "./appointments/Routes"
import NotFound from "@core/pages/NotFound"


export default function App() {
    return (
        <StrictMode>

            <BaseContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<UserRoutes />} />
                        <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        <Route path="/patients/*" element={<PatientsRoutes />} />
                        <Route path="/doctors/*" element={<DoctorsRoutes />} />
                        <Route path="/appointments/*" element={<AppointmentsRoutes />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                </BrowserRouter>
            </BaseContextProvider>
        </StrictMode>
    )
}

createRoot(document.getElementById("root")!).render(<App />)

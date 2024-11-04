import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserRoutes from "@users/Routes.tsx"
import BaseContextProvider from "@core/components/BaseContextProvider.tsx"
import DashboardRoutes from "./dashboard/Routes"
import ScheduleRoutes from "./schedule/Routes"
import DoctorsRoutes from "./doctors/Routes"


export default function App() {
    return (
        <StrictMode>

            <BaseContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<UserRoutes />} />
                        <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        <Route path="/schedule/*" element={<ScheduleRoutes />} />
                        <Route path="/doctors/*" element={<DoctorsRoutes />} />
                    </Routes>

                </BrowserRouter>
            </BaseContextProvider>
        </StrictMode>
    )
}

createRoot(document.getElementById("root")!).render(<App />)

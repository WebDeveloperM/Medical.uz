import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserRoutes from "@users/Routes.tsx"
import BaseContextProvider from "@core/components/BaseContextProvider.tsx"
import DashboardRoutes from "./dashboard/Routes"
import FinanceRoutes from "./finance/Routes"


export default function App() {
    return (
        <StrictMode>

            <BaseContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<UserRoutes />} />
                        <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        <Route path="/finance/*" element={<FinanceRoutes />} />
                    </Routes>

                </BrowserRouter>
            </BaseContextProvider>
        </StrictMode>
    )
}

createRoot(document.getElementById("root")!).render(<App />)

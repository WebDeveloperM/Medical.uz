import { Route, Routes } from "react-router-dom"
import Finance from "./pages/Finance";


export default function FinanceRoutes() {
   
    return (

        <Routes>
            <Route path="/" element={<Finance />} />
        </Routes>


    )
}

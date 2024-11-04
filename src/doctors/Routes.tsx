import { Route, Routes } from "react-router-dom"
import Doctors from "./pages/Doctors"


export default function DoctorsRoutes() {
   
    return (

        <Routes>
            <Route path="/" element={<Doctors />} />
        </Routes>


    )
}

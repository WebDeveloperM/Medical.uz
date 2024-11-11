import { Route, Routes } from "react-router-dom"
import Doctors from "./pages/Doctors"
import AddDoctors from "./pages/AddDoctors"


export default function DoctorsRoutes() {
   
    return (

        <Routes>
            <Route path="/*" element={<Doctors />} />
            <Route path="/add-doctors/*" element={<AddDoctors />} />
        </Routes>


    )
}

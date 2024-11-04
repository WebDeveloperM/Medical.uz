import { Route, Routes } from "react-router-dom"
import Schedule from "./pages/Schedule";


export default function ScheduleRoutes() {
   
    return (

        <Routes>
            <Route path="/" element={<Schedule />} />
        </Routes>


    )
}

import { useState } from "react";
import doctor3 from "../static/doctor3.png";
import { RiHome3Line } from "react-icons/ri";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPackageDependents } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Sidebar({ open }: { open: boolean }) {
    const [active, setActive] = useState(0);
    return (

        <div className={`h-full bg-white fixed top-[57px] z-10 left-0  ${open ? "w-64" : "md:w-20 w-0"}  duration-300 `}>


            <div className="h-full relative shadow">
                {/* <CircleArrowLeft className={`absolute top-3.5 w-7 text-secondary -right-3  cursor-pointer ${!open ? "hidden" : "inline-block"}`} onClick={() => setOpen(!open)} /> */}


                <div className="flex justify-center gap-2 border-b border-gray-200 pb-2 pt-1 min-h-[132px]">
                    <div className={`text-center flex flex-col items-center ${open ? "scale-100 sm:scale-100" : "scale-0 sm:scale-100"} duration-200`}>
                        <img src={doctor3} alt="doctor" className="w-[60px] h-[60px] rounded-full mt-3" />
                        <p className="text-secondary text-sm tracking-wider  origin-left duration-0 py-1 font-medium">Feruza</p>
                        <span className="text-gray-500 text-sm">Admin</span>
                    </div>
                </div>


                <ul className="pt-1 scrollbar-thumb-indigo-50 scrollbar-white h-2/3 overflow-y-scroll">
                    <li >
                        <Link to="/main" onClick={() => setActive(1)} className={`flex items-center pl-[18px] text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full group ${active == 1 ? "bg-secondary-light" : ""}`}>
                            <RiHome3Line className={`text-gray-900  overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg 
                            ${active == 1 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                            <span className={`origin-left text-base group-hover:text-secondary  ${active == 1 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800    ${active == 1 ? "text-secondary" : ""}`}>Dashboard</span>
                        </Link>
                    </li>

                    <li >
                        <Link to="/new" onClick={() => setActive(2)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 2 ? "bg-secondary-light" : ""}`}>
                            <FaRegCalendarAlt className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 2 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                            <span className={`origin-left text-base group-hover:text-secondary  ${active == 2 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 2 ? "text-secondary" : ""}`}>Appointments</span>
                        </Link>
                    </li>

                    <li onClick={() => setActive(3)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 3 ? "bg-secondary-light" : ""}`}>
                        <RiEmpathizeLine className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 3 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${active == 3 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 3 ? "text-secondary" : ""}`}>Patients</span>
                    </li>
                    <li onClick={() => setActive(4)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 4 ? "bg-secondary-light" : ""}`}>
                        <FaUserDoctor className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 4 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${active == 4 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 4 ? "text-secondary" : ""}`}>Doctors</span>
                    </li>

                    <li onClick={() => setActive(6)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 6 ? "bg-secondary-light" : ""}`}>
                        <GoPackageDependents className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 6 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${active == 6 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 6 ? "text-secondary" : ""}`}>Finances</span>
                    </li>

                    <hr className="w-[88%] mx-auto my-1" />

                    <li onClick={() => setActive(7)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 7 ? "bg-secondary-light" : ""}`}>
                        <IoSettingsOutline className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 7 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${active == 7 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 7 ? "text-secondary" : ""}`}>Settings</span>
                    </li>

                    <li onClick={() => setActive(8)} className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${active == 8 ? "bg-secondary-light" : ""}`}>
                        <MdLogout className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${active == 8 ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${active == 7 ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${active == 8 ? "text-secondary" : ""}`}>Signout</span>
                    </li>



                </ul>
            </div>

        </div>




    )
}




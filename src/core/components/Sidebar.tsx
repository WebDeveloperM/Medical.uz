import doctor3 from "../../dashboard/static/doctor3.png";
import { RiHome3Line } from "react-icons/ri";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPackageDependents } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Prop = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ open, setOpen }: Prop) {
    const { pathname } = useLocation();
    const [screenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        screenSize.width < 768 && setOpen(false)
    }, [])

    return (

        <div className={`h-full bg-white fixed top-[57px] z-20 left-0  ${open ? "w-64" : "md:w-20 w-0"}  duration-300 `}>


            <div className="h-full relative shadow">

                <div className="flex justify-center gap-2 border-b border-gray-200 pb-2 pt-1 min-h-[132px]">
                    <div className={`text-center flex flex-col items-center ${open ? "scale-100 sm:scale-100" : "scale-0 sm:scale-100"} duration-200`}>
                        <img src={doctor3} alt="doctor" className="w-[60px] h-[60px] rounded-full mt-3" />
                        <p className="text-secondary text-sm tracking-wider  origin-left duration-0 py-1 font-medium">Feruza</p>
                        <span className="text-gray-500 text-sm">Admin</span>
                    </div>
                </div>


                <ul className="pt-1 scrollbar-thumb-indigo-50 scrollbar-white h-2/3 overflow-y-scroll">
                    <Link to="/dashboard" className={`flex items-center pl-[18px] text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full group ${pathname === "/dashboard" ? "bg-secondary-light" : ""}`}>
                        <RiHome3Line className={`text-gray-900  overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/dashboard" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/dashboard" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800`}>Dashboard</span>
                    </Link>

                    <Link to="/doctors" className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/doctors" ? "bg-secondary-light" : ""}`}>
                        <FaUserDoctor className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/doctors" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/doctors" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800`}>Doctors</span>
                    </Link>


                    <Link to="/patients" className={`flex items-center pl-[18px] mt-0.5 group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/patients" ? "bg-secondary-light" : ""}`}>

                        <RiEmpathizeLine className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/patients" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/patients" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800`}>Patients</span>
                    </Link>



                    <Link to="/appointments" className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/" ? "bg-secondary-light" : ""}`}>
                        <FaRegCalendarAlt className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/appointments" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/appointments" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${pathname === "/appointments" ? "text-secondary" : ""}`}>Appointments</span>
                    </Link>

                    <Link to="/" className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/finances" ? "bg-secondary-light" : ""}`}>
                        <GoPackageDependents className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/finances" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/finances" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${pathname === "/finances" ? "text-secondary" : ""}`}>Finances</span>
                    </Link>

                    <hr className="w-[88%] mx-auto my-1" />

                    <Link to="/settings" className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/settings" ? "bg-secondary-light" : ""}`}>
                        <IoSettingsOutline className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/settings" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/settings" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${pathname === "/settings" ? "text-secondary" : ""}`}>Settings</span>
                    </Link>

                    <Link to="/" className={`flex items-center pl-[18px] mt-0.5  group text-secondary text-sm gap-x-4 cursor-pointer px-2 py-1.5 hover:bg-secondary/10 rounded-r-full ${pathname === "/signout" ? "bg-secondary-light" : ""}`}>
                        <MdLogout className={`text-gray-900 overflow-clip cursor-pointer w-[35px] h-[35px] p-2 rounded-lg ${pathname === "/" ? "bg-secondary text-white group-hover:bg-secondary group-hover:text-white" : "bg-secondary-light text-gray-900 group-hover:bg-white group-hover:text-secondary "}`} />
                        <span className={`origin-left text-base group-hover:text-secondary  ${pathname === "/" ? "text-secondary" : ""} duration-200 ${!open ? "scale-0" : ""} text-gray-800  ${pathname === "/" ? "text-secondary" : ""}`}>Signout</span>
                    </Link>



                </ul>
            </div>

        </div >




    )
}




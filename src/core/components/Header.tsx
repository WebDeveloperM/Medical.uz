import { RiMessage3Line } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import { RiListCheck3 } from "react-icons/ri";
import { MdOutlineStarOutline } from "react-icons/md";
import { fleg_uz, doctor3 } from "../../dashboard/utils";
import { RiHome3Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import logo from "@core/static/logo.png";
import { FaBars } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";


type Prop = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    link: string
}

export default function Header({ open, setOpen }: Prop) {
    const pathname = useLocation();
    const linkName = pathname.pathname.split("/")[1];

    return (
        <div className="fixed top-0 left-0 right-0 z-10">
            <div className="w-full h-[57px] bg-white border-b border-gray-200">
                <div className="flex justify-between sm:justify-between lg:justify-between  items-center mx-auto h-full px-4 min-w-1/2">
                    <div className="flex items-center gap-x-3  ">
                        <img src={logo} alt="logo" className={`w-[55px] cursor-pointer `} onClick={() => setOpen(!open)} />
                        <h1 className={`text-gray-700 duration-200 font-medium text-xl  origin-left tracking-widest ${open ? "sm:block hidden" : " sm:hidden block "}`}>UzLabs.uz</h1>
                        <h1 className={`text-gray-700 duration-200  font-medium text-xl  ${!open ? "hidden" : "sm:hidden  "} origin-left tracking-widest `}>UzLabs.uz</h1>


                        <div className={`text-white text-sm font-semi tracking-wider ml-[1%] 2xl:ml-[2%] hidden lg:inline-block 
                            ${open ? "md:max-w-[calc(100%-250px)] 2xl:max-w-[calc(100%-250px)] md:ml-[87px] 2xl:ml-[87px]" : "md:max-w-[calc(100%-70px)] md:ml-[15px]"}`}>
                            <div className=''>
                                <label className="input input-bordered rounded-sm flex items-center gap-2 input-sm  bg-secondary/10  hover:border-secondary focus:scale-x-110 duration-200 cursor-pointer  focus:ring-2 focus:ring-secondary focus:outline-none ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="14px"
                                        className="fill-secondary mr-1 ">
                                        <path
                                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                        </path>
                                    </svg>
                                    <input type="text" className="grow my-2 text-black" placeholder="Qidirish" />

                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center gap-3.5 '>
                        <div className='hidden md:inline-block'>
                            <div className='flex items-center gap-2 '>
                                <span className='w-8 h-8  bg-secondary/10 rounded-full flex items-center            justify-center'>
                                    <img src={fleg_uz} alt="flag" className='items-center w-5 h-5 rounded-full ' />
                                </span>

                                <span className='w-8 h-8  bg-secondary/10 rounded-full'>
                                    <MdOutlineStarOutline className='text-secondary font-extrabold translate-x-1/2 translate-y-1/2' />
                                </span>
                                <span className='w-8 h-8  bg-secondary/10 rounded-full'>
                                    <RiListCheck3 className='text-secondary font-extrabold translate-x-1/2 translate-y-1/2' />
                                </span>
                                <span className='w-8 h-8  bg-secondary/10 rounded-full'>
                                    <AiFillAlert className='text-secondary font-extrabold translate-x-1/2 translate-y-1/2' />
                                </span>
                                <span className='w-8 h-8  bg-secondary/10 rounded-full'>
                                    <RiMessage3Line className='text-secondary font-extrabold translate-x-1/2 translate-y-1/2' />
                                </span>
                            </div>
                        </div>
                        <div className='avatar'>
                            <div className="w-10 md:rounded-full">
                                <img src={doctor3} alt="avatar" className=" hidden md:inline-block" />
                                <FaBars className="text-secondary text-xl md:hidden translate-y-1/2  cursor-pointer  rounded-md" onClick={() => setOpen(!open)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-[50px] bg-white border-b border-gray-200">
                <div className="flex justify-between items-center mx-auto h-full px-4">
                    <div className={`text-white text-sm font-semi  tracking-wider ml-[1%] 2xl:ml-[2%] ${open ? "md:max-w-[calc(100%-250px)] md:ml-[275px] 2xl:ml-[275px] " : "md:max-w-[calc(100%-70px)] md:ml-[80px] 2xl:ml-[80px]"}`}>
                        <div className='flex items-center gap-2 text-secondary text-base 2xl:text-lg'>
                            <RiHome3Line className="text-secondary text-xl" />
                            <span> / {linkName[0].toUpperCase() + linkName.slice(1)}</span>
                        </div>
                    </div>


                    <div className='hidden md:inline-block'>
                        <div className='flex items-center gap-3 border-2'>
                            <div className="bg-secondary/10 l p-1.5">
                                <FaRegCalendarAlt className="text-secondary text-sm h-4 w-4" />
                            </div>

                            <input type="text" className="placeholder:text-[12px] placeholder:tracking-wider mr-3 placeholder:text-center placeholder:text-black" placeholder="10/01/2024 - 10/30/2024" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

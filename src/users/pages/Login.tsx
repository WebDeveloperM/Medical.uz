import logo from "@core/static/logo.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    

    return (
        <div className="bg-[url('/src/users/static/login-bg.svg')] h-screen w-full bg-cover sm:bg-bottom relative">

            <div className="border-[0.7px] border-secondary rounded-lg p-2 bg-white sm:bg-white/70 pt-[2%] 
                            max-w-[90%] min-w-[85%] mx-auto sm:max-w-[50%] sm:min-w-[40%] md:max-w-[35%] md:min-w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-[70%] xl:left-[75%] xl:max-w-[25%] xl:min-w-[20%]">
                <div className="">
                    <img src={logo} alt="logo" className="w-1/4 mx-auto mt-5 sm:mt-0" />
                    <div className="px-2 lg:px-3 xl:px-4">

                        <h5 className="text-xl font-medium text-gray-700 py-3 whitespace-normal tracking-wider text-center">Kirish</h5>
                        <form action="" className="mb-7">
                            <div>
                                <label htmlFor="" className=" text-gray-700">Login</label> <span className="text-red-500">*</span>

                                <p className="input input-bordered flex items-center gap-2 input-sm my-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                    <input  type="text" className="grow" placeholder="Login kiriting" />
                                </p>
                            </div>


                            <div>
                                <label htmlFor="" className=" text-gray-700">Parol</label> <span className="text-red-500">*</span>

                                <label className="input input-bordered flex items-center gap-2 input-sm mt-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">

                                    <input type={`${showPassword ? "text" : "password"}`} className="grow" placeholder="Parol kiriting" />
                                    <svg
                                        onClick={() => {
                                            setShowPassword(!showPassword)
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70 hover:text-secondary">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>

                            <div className="mt-2">
                                <label htmlFor="" className=" text-gray-700 ">Role</label> <span className="text-red-500">*</span>
                                <select className="select select-bordered w-full max-w-full select-sm bg-white mt-2 placeholder:text-gray-200 hover:border-secondary cursor-pointer ring-0 focus:outline-none">
                                    <option disabled selected className="text-gray-500">Role tanlang:</option>
                                    <option>Admin</option>
                                    <option>Doctor</option>
                                    <option>Hodim</option>
                                </select></div>

                            <div className="flex justify-end text-sm text-gray-500 underline mt-2 hover:text-secondary duration-200 cursor-pointer">
                                Parolni unutdingizmi?
                            </div>

                            <Link to="/dashboard" >
                                <button className="w-full p-1.5 my-2 mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200">
                                    Kirish
                                </button>
                            </Link>
                            <button className="w-full p-1.5 bg-neutral text-gray-700 rounded-md text-sm hover:bg-neutral/80 duration-200">
                                Hisobingiz yo'qmi? <Link to="/register" className="px-1">Ro'yhatdan o'tish</Link>
                            </button>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}


// focus:border-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary/40
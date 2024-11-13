import logo from "@core/static/logo.svg"
import { useMask } from "@react-input/mask"
import { Link } from "react-router-dom"
import { SignUpFormDataForSuperUSer } from '@users/types.ts'
import { FormProvider, useForm } from "react-hook-form"

export default function Register() {

    // const navigate = useNavigate()

    const inputRef = useMask({ mask: "______________", replacement: { _: /\d/ } })
    const inputRefPS = useMask({ mask: "11 | _______", replacement: { 1: /[A-Za-z]/, _: /\d/ } })
    const methods = useForm<SignUpFormDataForSuperUSer>()
    const { ref: firstNameInputRef, ...firstNameRest } = methods.register("firstName")
    const { ref: lastNameInputRef, ...lastNameRest } = methods.register("lastName")
    const { ref: clinicNameInputRef, ...clinicNameRest } = methods.register("clinicName")
    const { ref: personalNumberInputRef, ...personalNumberRest } = methods.register("personalNumber")
    const { ref: personSerNumInputRef, ...personSerNumRest } = methods.register("personSerNum")


    async function onSubmit(data: SignUpFormDataForSuperUSer) {
        console.log(data);
    }
    return (
        <div className="bg-[url('/src/users/static/login-bg.svg')] sm:h-screen min-h-[800px] sm:min-h-0 w-full bg-cover sm:bg-bottom relative  sm:py-0">

            <div className="border-[0.7px] border-secondary rounded-lg bg-white sm:bg-white/70 pt-[2%]
                            max-w-[90%] min-w-[85%] mx-auto sm:max-w-[50%] sm:min-w-[40%] md:max-w-[35%] md:min-w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-[70%] xl:left-[75%] xl:max-w-[25%] xl:min-w-[20%] ">
                <div className="">
                    <img src={logo} alt="logo" className="w-[20%] xl:w-1/5 2xl:w-1/4 mx-auto mt-5 sm:mt-0" />
                    <div className="px-7 ">

                        <h5 className="text-xl font-medium text-gray-700 py-3 whitespace-normal tracking-wider text-center">Ro'yhatdan o'tish</h5>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}
                                action="" className="mb-7">

                                <div className="w-full">
                                    <label htmlFor="" className=" text-gray-700">Ism</label> <span className="text-red-500">*</span>

                                    <p className="input input-bordered flex items-center gap-2 input-sm my-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                        <input type="text" className="grow" placeholder="Ism kiriting"
                                            {...firstNameRest}
                                            ref={(e) => {
                                                firstNameInputRef(e)
                                                inputRef.current = e
                                            }}
                                        />
                                    </p>
                                </div>


                                <div className="w-full">
                                    <label htmlFor="" className=" text-gray-700">Familiya</label> <span className="text-red-500">*</span>

                                    <p className="input input-bordered flex items-center gap-2 input-sm my-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                        <input type="text" className="grow" placeholder="Familiya kiriting"
                                            {...lastNameRest}
                                            ref={(e) => {
                                                lastNameInputRef(e)
                                                inputRef.current = e
                                            }}
                                        />
                                    </p>
                                </div>
                                
                                <div className="w-full">
                                    <label htmlFor="" className=" text-gray-700">Klinika</label> <span className="text-red-500">*</span>

                                    <p className="input input-bordered flex items-center gap-2 input-sm my-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                        <input type="text" className="grow" placeholder="Klinika nomini kiriting"
                                            {...clinicNameRest}
                                            ref={(e) => {
                                                clinicNameInputRef(e)
                                                inputRef.current = e
                                            }}
                                        />
                                    </p>
                                </div>

                                <div>
                                    <div className="w-full">
                                        <label htmlFor="" className=" text-gray-700">JSHSHIR</label> <span className="text-red-500 inline-block">*</span>

                                        <p className="input input-bordered flex items-center gap-2 input-sm my-1 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                            <input type="text" className="grow" placeholder="00000000000000"
                                                {...personalNumberRest}
                                                ref={(e) => {
                                                    personalNumberInputRef(e)
                                                    inputRef.current = e
                                                }}
                                            />
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="" className=" text-gray-700">Passport seria va raqami</label> <span className="text-red-500 inline-block">*</span>

                                        <p className="input input-bordered flex items-center gap-2 input-sm my-1 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">
                                            <input type="text" className="grow" placeholder="AB | 1234567"

                                                {...personSerNumRest}
                                                ref={(e) => {
                                                    personSerNumInputRef(e)
                                                    inputRefPS.current = e
                                                }}
                                                onChange={(e) => setPSeria(e.target.value)}
                                            />
                                        </p>
                                    </div>

                                    {/* <div >
                                        <label htmlFor="" className=" text-gray-700 ">Login</label> <span className="text-red-500">*</span>

                                        <label className="input input-bordered flex items-center gap-2 input-sm mt-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">

                                            <input type="text" className="grow duration-200" placeholder="Login kiriting" />

                                        </label>
                                    </div>
                                    <div className="lg:flex justify-center gap-3 mt-1">
                                        <div className="w-full">
                                            <label htmlFor="" className=" text-gray-700">Parol</label> <span className="text-red-500">*</span>

                                            <label className="input input-bordered flex items-center gap-2 input-sm mt-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">

                                                <input type={`${showPassword ? "text" : "password"}`} className="grow duration-200" placeholder="Parol kiriting" />
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
                                        <div className="w-full">
                                            <label htmlFor="" className=" text-gray-700">Parolni takrorlang</label> <span className="text-red-500">*</span>

                                            <label className="input input-bordered flex items-center gap-2 input-sm mt-2 bg-white hover:border-secondary cursor-pointer placeholder:text-gray-500 focus:ring-2 focus:ring-secondary focus:outline-none ">

                                                <input type={`${showPasswordConfirm ? "text" : "password"}`} className="grow duration-200" placeholder="Parolni takrorlang" />
                                                <svg
                                                    onClick={() => {
                                                        setShowPasswordConfirm(!showPasswordConfirm)
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
                                    </div> */}
                                </div>


                                <button className="w-full p-1.5 my-2 mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200">
                                    Ro'yhatdan o'tish
                                </button>
                                <p className="w-full text-center text-gray-700 mt-1 rounded-md text-sm ">
                                    Hisobingiz mavjudmi? <Link to="/" className="px-1 hover:text-secondary hover:underline">Kirish</Link>
                                </p>

                            </form>
                        </FormProvider>


                    </div>
                </div>
            </div>
        </div>
    )
}



import doctor from "@doctors/static/doctor.png";
import doctor1 from "@doctors/static/doctor1.png";
import doctor2 from "@doctors/static/doctor2.png";
import doctor3 from "@doctors/static/doctor3.png";
import tableIcon from "@doctors/static/tableIcon.svg";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";


export default function Table() {



    const data = [
        {
            id: 1,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor

        },
        {
            id: 2,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor1

        },
        {
            id: 3,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2
        },
        {
            id: 4,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 5,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2

        },
        {
            id: 6,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 7,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2

        },
        {
            id: 8,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 9,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2

        },
        {
            id: 10,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 11,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2

        },
        {
            id: 12,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 13,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor2

        },
        {
            id: 14,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            designation: "Therapist",
            phone: "+998907150560",
            image: doctor3
        },
        {
            id: 15,
            patientId: 214,
            fio: "Ergashev Shavkat",
            date: "24.11.1968",
            designation: "Pediatrics",
            phone: "+998907150560",
            image: doctor1
        }
    ]

    // For pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data?.slice(firstIndex, lastIndex)
    const npage = data && Math.ceil(data?.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCPage = (id: number) => {
        setCurrentPage(id)
    }

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        // <div className='overflow-x-auto 2xl:p-5 p-3'>
        //     <table className='w-full rounded-md' >
        //         <tr className="bg-secondary text-white"  >
        //             <td className='px-3'>№</td>
        //             <td className='px-3'>Doctor Name</td>
        //             <td className='px-3'>Designation</td>
        //             <td className='px-3'>Phone</td>
        //             <td className='px-3'>Actions</td>
        //         </tr>



        //         <tbody className='w-full'>

        //             <tr>
        //                 <td>1</td>
        //                 <td>Эшпулатов Улугбек</td>
        //                 <td>Педиатр</td>
        //                 <td>+998907150560</td>
        //             </tr>
        //             <tr>
        //                 <td>2</td>
        //                 <td>Эшпулатов Улугбек</td>
        //                 <td>Педиатр</td>
        //                 <td>+998907150560</td>
        //             </tr>

        //         </tbody>
        //     </table>

        // </div>




        <div className=' 2xl:p-5 px-3 overflow-x-auto' >
            <table className="table-md  min-w-full text-left  whitespace-nowrap rounded-md  overflow-x-auto " >

                <thead className="tracking-wider sticky top-0  bg-secondary  rounded-md text-white dark:bg-neutral-800 ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold  dark:border-neutral-600 w-[30px] ">
                            №
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600 w-[60px] ">
                            ID
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />
                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600  w-[300px]">
                            Doctor Name
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Designation
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Date of Birth
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Phone
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>

                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Actions
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]" />

                            </a>

                        </th>

                    </tr>


                </thead>

                <tbody className="scrollbar h-2/3 overflow-y-scroll">
                    {records.map((item) => (
                        <tr key={item.id} className="border-b  dark:border-neutral-600 border-l hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="2xl:px-5 px-3 py-1.5  dark:border-neutral-600">
                                {item.id}
                            </th>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600">#{item.patientId}</td>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600 flex items-center gap-2">
                                <img src={item.image} alt="" className="w-10 h-10 rounded-full" />
                                {item.fio}

                            </td>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600">{item.date}</td>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600">{item.designation}</td>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600 ">{item.phone}</td>
                            <td className="2xl:px-5 px-3 py-1.5 dark:border-neutral-600 border-r">
                                <div className="flex items-center gap-6 justify-center float-left text-base">
                                    <FaRegTrashAlt className="text-red-500 cursor-pointer" />
                                    <BiSolidEdit className="text-blue-500 cursor-pointer" />
                                    <LuEye className="text-green-500 cursor-pointer" />
                                </div>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>




            {data?.length >= recordsPerPage ? <nav aria-label="Page navigation example" className=' pt-5'>
                <ul className="inline-flex -space-x-px text-base h-10 ">
                    <li>
                        <a onClick={prePage} href="#" className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                            {/* <GrFormPrevious /> */}
                            Previous
                        </a>
                    </li>
                    {numbers.map((n, i) => (
                        <li key={i}>
                            <a href="#" onClick={() => changeCPage(n)} className={` ${currentPage == n ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "bg-white text-gray-500"} flex items-center justify-center px-4 h-8 leading-tight   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{n}</a>
                        </li>
                    ))}

                    <li>
                        <a onClick={nextPage} href="#" className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {/* <MdNavigateNext /> */}
                            Next
                        </a>
                    </li>

                </ul>
            </nav> : ""}
        </div>
    )
}

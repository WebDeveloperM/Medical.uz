import doctor from "./static/doctor.png";

const data = [
    {
        id: 1,
        patientId: 213,
        fio: "Эшпулатов Улугбек",
        date: "16.04.2000",
        designation: "Терапевт",
        phone: "+998907150560",

    },
    {
        id: 2,
        patientId: 214,
        fio: "Эшпулатов Улугбек",
        date: "16.04.2000",
        designation: "Педиатр",
        phone: "+998907150560",
    }
]


export default function TablePatients() {
    return (



        // <div className='overflow-x-auto 2xl:p-5 p-3'>
        //     <table className="min-w-full text-left text-sm whitespace-nowrap rounded-md  " >
        //         <div className='overflow-x-auto rounded bg-secondary '>
        //             <thead className="tracking-wider sticky top-0  text-white dark:bg-neutral-800 ">
        //                 <tr>
        //                     <th scope="col" className="2xl:px-6 px-3 py-1 font-semibold  dark:border-neutral-600 w-[24px] flex items-center justify-between gap-1">
        //                         №

        //                         <a href="" className="inline">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 320 512"
        //                                 className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
        //                                 fill="currentColor"
        //                             >
        //                                 <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
        //                             </svg>
        //                         </a>


        //                     </th>
        //                     <th scope="col" className="2xl:px-6 px-3 py-1 font-semibold  dark:border-neutral-600 w-[24px]">ID</th>
        //                     <th scope="col" className="2xl:px-6 px-3 py-1 font-semibold  dark:border-neutral-600 w-[24px]">ФИО</th>
        //                 </tr>

        //             </thead>
        //         </div>

        //     </table>
        // </div>

        <div className='overflow-x-auto 2xl:p-5 p-3' >
            <table className="min-w-full text-left text-sm whitespace-nowrap rounded-md  overflow-x-auto " >

                <thead className="tracking-wider sticky top-0 rounded- bg-secondary  text-white dark:bg-neutral-800 ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold  dark:border-neutral-600 w-[24px] flex">
                            №
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#ffffff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600 w-[20px] ">
                            Id
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#fff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600 ">
                            ФИО
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#fff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Дата рожд.
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#fff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Обозначение
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#fff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold dark:border-neutral-600">
                            Телефон
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="#fff"
                                >
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>

                    </tr>


                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr className="border-b  dark:border-neutral-600 border-l hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="2xl:px-5 px-3 py-2   dark:border-neutral-600">
                                {item.id}
                            </th>
                            <td className="2xl:px-5 px-3 py-2  dark:border-neutral-600">{item.patientId}</td>
                            <td className="2xl:px-5 px-3 py-2  dark:border-neutral-600">
                                <img src={doctor} alt="" className="w-10 h-10 rounded-full" />
                                {item.fio}

                            </td>
                            <td className="2xl:px-5 px-3 py-2  dark:border-neutral-600">{item.date}</td>
                            <td className="2xl:px-5 px-3 py-2  dark:border-neutral-600">{item.designation}</td>
                            <td className="2xl:px-5 px-3 py-2  dark:border-neutral-600 border-r">{item.phone}</td>

                        </tr>

                    ))}

                </tbody>

            </table>




            <br />
            <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
                <p>
                    Showing <strong>1-5</strong> of <strong>10</strong>
                </p>

                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >
                            1
                        </a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
                            href="#!"
                        >
                            2
                            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                                (current)
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav></div >

    )
}

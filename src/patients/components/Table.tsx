import filterIcon from '../static/filterIcon.svg'


const data = [
    {
        id: 1,
        patientId: 213,
        fio: "Эшпулатов Улугбек",
        date: "16.04.2000",
        phone: "+998907150560",
        balance: "+35700",
        visit: "05.11.2024 10:48",
        discount: "Без льгот",
        notifyManager: "Жумаева Нодира",
        filial: "Центральный",
    },
    {
        id: 2,
        patientId: 214,
        fio: "Эшпулатов Улугбек",
        date: "16.04.2000",
        phone: "+998907150560",
        balance: "+35700",
        visit: "05.11.2024 10:48",
        discount: "Без льгот",
        notifyManager: "Жумаева Нодира",
        filial: "Центральный",
    }
]


export default function TablePatients() {
    return (

        <div className='overflow-x-auto p-5' >
            <table className="min-w-full text-left text-sm whitespace-nowrap " >

                <thead className="tracking-wider sticky top-0  border bg-neutral-50 dark:bg-neutral-800 ">
                    <tr>
                        <th scope="col" className="px-6 py-3  dark:border-neutral-600 flex items-center gap-1 w-[24px]">
                            №
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>
                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600 w-[20px]">
                            Id
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            ФИО пациента
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Дaта рож.
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Телефон
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Баланс
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Посетил
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Льгота
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Регистратор
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                        <th scope="col" className="px-6 py-3 border-x dark:border-neutral-600">
                            Филиал
                            <a href="" className="inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                                    fill="currentColor"
                                >
                                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                </svg>
                            </a>

                        </th>
                    </tr>
                </thead>


                <tbody>
                    {data.map((item) => (
                        <tr className="border-b  dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-5 py-2 border-x  dark:border-neutral-600">
                                {item.id}
                            </th>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.patientId}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.fio}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.date}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.phone}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.balance}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.visit}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.discount}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.notifyManager}</td>
                            <td className="px-5 py-2 border-x dark:border-neutral-600">{item.filial}</td>
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
            </nav></div>

    )
}

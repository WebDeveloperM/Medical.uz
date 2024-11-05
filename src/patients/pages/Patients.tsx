import Layout from "@core/components/Layout";
import { useState } from "react";
import TablePatients from "../components/Table";

export default function Patients() {
    const [open, setOpen] = useState(true);


    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                
                <div className="overflow-x-auto bg-white text-gray-700 dark:bg-neutral-700 h-[100vh] overflow-y-scroll m-5 ">
                    <div className='flex items-center gap-3 px-5 pt-5'>
                        <div className="relative m-[2px] mb-3 float-left  flex items-center gap-1">
                            <span>Показать:  </span>
                            <label htmlFor="inputFilter" className="sr-only">Filter</label>
                            <select id="inputFilter" className="block w-20 rounded-lg border dark:border-none dark:bg-neutral-600 px-2 py-1 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                                <option value="10" selected>10</option>
                                <option value="100">100</option>
                                <option value="250">250</option>
                                <option value="500">500</option>
                                <option value="all">Все</option>
                            </select>
                        </div>


                        <div className="relative m-[2px] mb-3 mr-5 float-left flex items-center gap-2">
                            <span>Поиск по ФИО: </span>
                            <label htmlFor="inputSearch" className="sr-only">Search </label>
                            <input id="inputSearch" type="text" className="block w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />

                        </div>
                    </div>

                    <TablePatients />
                </div>

            </Layout >
        </>
    )
}

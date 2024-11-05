import Layout from "@core/components/Layout";
import { useState } from "react";
import TablePatients from "../components/Table";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Filter from "../components/Filter";

export default function Patients() {
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState(false);


    return (
        <>
            <Layout open={open} setOpen={setOpen}>

                <div className="overflow-x-auto bg-white text-gray-700 dark:bg-neutral-700 h-[100vh] overflow-y-scroll 2xl:m-5 m-3 ">
                    <div className="flex items-center justify-between px-3 2xl:px-5 pt-5">
                        <h4 className="text-lg font-semibold">Пациенты</h4>
                        <button className="bg-secondary text-white px-3 py-1 rounded-md">Добавить пациента</button>
                    </div>


                    <button className="bg-secondary/10  text-secondary px-3 py-1 2xl:mx-5 mx-3 my-2 rounded-md flex items-center gap-1" onClick={() => setFilter(!filter)}>
                        Фильтр
                        {filter ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>

                    <Filter filter={filter} />


                    <div className='sm:flex items-center gap-3 px-3 2xl:px-5 pt-2'>
                        <div className="relative m-[2px] mb-3 float-left  flex items-center gap-1">
                            <span>Показать:  </span>
                            <label htmlFor="inputFilter" className="sr-only">Filter</label>
                            <select id="inputFilter" className="block w-20 rounded-lg border dark:border-none dark:bg-neutral-600 px-2 py-1 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50">
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
                            <input id="inputSearch" type="text" className="block w-48 2xl:w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                        </div>
                    </div>

                    <TablePatients />
                </div>

            </Layout >
        </>
    )
}

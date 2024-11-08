import { AiOutlinePhone } from "react-icons/ai";
import { MdCheckCircleOutline } from "react-icons/md";

type Props = {
    item: {
        id: number;
        visit: string;
        image: string;
        time: string;
        name: string;
        email: string;
        phone: string;
        payment: boolean;
        patientId: string;
    }
}


export default function PatientItem({ item }: Props) {
    return (
        <div className="flex items-center justify-between mx-4 px-3 2xl:px-5 border mt-2 rounded-md " >
            <table className="table min-w-full overflow-x-scroll scrollbar h-2/3 overflow-y-scroll">

                <tr className="min-w-full h-20">
                    <td className="p-2 w-20" >
                        <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                    </td>
                    <td className="p-2 text-left w-32">
                        <p className="text-sm font-base text-secondary pb-1">{item.patientId}</p>
                        <p className="text-sm font-semibold">{item.name}</p>
                    </td>
                    <td className="p-2 text-left w-48">
                        <p className="text-sm font-base text-secondary pb-1">Today</p>
                        {item.visit}
                    </td>
                    <td className="p-2 text-left w-48">
                        <p className="text-sm font-base text-secondary pb-1">Time</p>
                        {item.time}
                    </td>
                    <td className="p-2 text-left ">
                        <p className="text-sm font-base text-secondary pb-1">{item.email}</p>
                        <p className="text-sm flex items-center gap-1"> <span><AiOutlinePhone /></span>{item.phone}</p>
                    </td>
                    <td className="p-2 text-left w-28">
                        <p className="text-sm font-base text-secondary pb-1">Payment</p>
                        <p className="text-sm ">{item.payment ? "Paid" : "Pending"}</p>
                    </td>
                    <td className="p-2 text-left w-16 ">
                        <MdCheckCircleOutline  className={`text-secondary text-sm border border-gray-500 rounded-full p-1.5 w-8 h-8`}/>
                    </td>
                </tr>
            </table>

            {/* <div className="flex items-center justify-between w-full h-20 rounded-md ">
                <div className="flex items-center gap-2 ">
                    <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                    <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

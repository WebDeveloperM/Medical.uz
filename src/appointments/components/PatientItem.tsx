type Props = {
    item: {
        id: number;
        visit: string;
        time: string;
        name: string;
        email: string;
        phone: string;
        payment: boolean;
    }
}


export default function PatientItem({ item }: Props) {
    return (
        <div className="flex items-center justify-between mx-4 px-3 2xl:px-5 border mt-1 rounded-md sha" >
            <p>{item.id}</p>

        </div>
    )
}

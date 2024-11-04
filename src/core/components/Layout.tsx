import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import Header from "@core/components/Header"
import Sidebar from "@core/components/Sidebar"

type Props = {
    children: ReactNode,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}



export default function Layout({ children, open, setOpen }: Props) {
    const [link, setLink] = useState<string>("Dashboard")
    return (
        <div className="bg-secondary/5 h-full">
            <Sidebar open={open} setLink={setLink} />
            <Header open={open} setOpen={setOpen} link={link} />
            {children}

        </div>
    )
}

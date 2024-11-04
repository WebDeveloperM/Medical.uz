import Layout from "@core/components/Layout";
import { useState } from "react";
import New from "../components/New";


export default function Finance() {
    const [open, setOpen] = useState(true);
    return (
        <Layout open={open} setOpen={setOpen}>
           <New open={open} />
        </Layout>
    )
}

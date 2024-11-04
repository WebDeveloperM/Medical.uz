import Layout from "@core/components/Layout";
import { useState } from "react";

export default function Doctors() {
    const [open, setOpen] = useState(true);


    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <p>Doctors</p>
            </Layout>
        </>
    )
}

import Layout from "@core/components/Layout";
import { useEffect, useState } from "react";
import Main from "../components/Main";
import DNALoader from "@core/components/DNALoader";

export default function Dashboard() {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading && <DNALoader />}
            {!loading && (
                <Layout open={open} setOpen={setOpen}>
                    <Main open={open} />
                </Layout>
            )}
        </>
    )
}

import Layout from "@core/components/Layout";
import { useState } from "react";

export default function Schedule() {
    const [open, setOpen] = useState(true);


    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <h1>Calendar Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae dolorem mollitia eveniet vitae, non aliquam quibusdam! Animi, voluptate non autem adipisci et, distinctio porro debitis sequi, omnis quod aut illum tempora cumque possimus nemo esse aliquam. Aspernatur odio provident accusamus, porro eum eveniet sequi mollitia ex ipsa facilis necessitatibus voluptates unde voluptatum est iure officia nisi fugiat, ratione explicabo rerum sint dicta optio similique. Amet quas, odio, repudiandae nam nobis non blanditiis quod ad quos ullam corrupti officiis vel provident cupiditate eaque! Repellat, perferendis! Enim autem molestias nulla beatae? Nostrum sint, facilis libero excepturi vero maiores expedita ea earum.</h1>
            </Layout>
        </>
    )
}

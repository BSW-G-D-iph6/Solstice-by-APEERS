'use client'
import { useRouter } from 'next/router'
// import iformula, { data } from "./../db";
export default function Page() {
    const router = useRouter()

    // const datalocal = data?.formulas.find((element) => {
    //     let path = element.title.replace(/\s/g, '')
    //     if (
    //         path == router.query.slug) {
    //         return true
    //     }

    // });

    // const datalocal = data?.formulas.find((element) => (element.title.replace(/\s/g, '') == router.query.slug));


    return
    <>
        <p>Post: {router.query.slug}</p>

        {/* <p>{datalocal?.title}</p> */}
    </>
}
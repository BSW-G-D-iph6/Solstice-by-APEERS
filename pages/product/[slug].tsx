'use client'
import { useRouter } from 'next/router'
import { Data } from "../../db";
import Button from '@mui/material/Button';
import styles from '../../styles/plp.module.css'

export default function Page() {
    const router = useRouter()




    const datalocal = Data?.products.find((element) => (element.title.replace(/\s/g, '') == router.query.slug));


    return (
        <div style={{ fontFamily: 'monospace', justifyContent: 'center', textAlign: 'center', padding: '1%' }}>
            <div className={styles.cardM}>

                <div className={styles.right}>
                    <h3>{datalocal?.title}</h3>

                    {datalocal?.detail}
                    <br />
                    <br />

                    <p style={{ opacity: 0.6 }}>| {datalocal?.tags.map((tag) => (`${tag} | `))}</p>


                    <br />
                    {/* <br /> */}

                    <h6> {datalocal?.benefit}</h6>

                </div>
                <br />





                <div className={styles.left}>
                    <img src={datalocal?.img} alt="AA" style={{ borderRadius: 20, width: '150px', alignContent: 'center' }} />
                    <br />
                    <br />
                    <br />
                    <b>{datalocal?.currency}{datalocal?.price}</b>
                    <br />
                    <br />
                    <br />
                    <br />



                </div>


            </div>
            <br />
            <sub style={{ opacity: 0.6 }}>{datalocal?.UUID}</sub>
        </div>
    )
}
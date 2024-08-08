import { ReactElement } from "react"
import { gql, useQuery } from "@apollo/client";
import createApolloClient from "./graphql/appollo-client";
import { ICata } from "./types/gql-product";

export default interface Iproducts {
    title: string,
    benefit: string,
    detail: string,
    tags: string[],
    price: number,
    img: string,
    currency: string,
    UUID: string,

}

export interface idata {
    products: Iproducts[]
}






export const Data: idata = {
    products: [
        {
            title: "Superr",
            benefit: "Save on Purchase | Customer",
            detail: `<>
                sadfas
                adfas
                asdfasdf
                safasfdsa

                asdfhasjkfhasd

                <h1>asdfhasdjf</h1>
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
                asdfhsadhkfjsahkdl<br />
            </>`,
            tags: ['ads', 'asdf'],
            price: 12,
            img: "https://avatars.githubusercontent.com/u/132499310?v=4",
            currency: '£',
            UUID: ''
        },
    ]
}



Data.products.map((element) => {
    const id = `${element.title}-${element.price}-${element.img}`;

    element.UUID = id




})

// export default Data;
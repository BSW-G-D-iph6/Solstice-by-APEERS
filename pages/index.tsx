import Image from "next/image";
import styles from "./../styles/Home.module.css";
import Iproducts, { Data } from "../db";
import { gql, useQuery } from "@apollo/client";
import createApolloClient from "../graphql/appollo-client";
import { ICata } from "@/types/gql-product";

export function initializedata() {
  if (process.env.NEXT_PUBLIC_JAVA === true) {

  const allproductQuery = gql`
  query bob{
  allPoductReal{
    
    img
    tags
    benefit
    price
    currency
    detail
    title
  }
}`

  const { loading, error, data } = useQuery<ICata>(allproductQuery);
  console.log(error);
  console.log(data);
  console.log(loading);


  // if ((typeof data?.allPoduct?.length != undefined)) {
  for (let index = 0; index < (data?.allPoductReal?.length ? data?.allPoductReal?.length : 0); index++) {
    const element = data?.allPoductReal[index];
    console.log(element)
    let objToPush: Iproducts = {
      title: (element?.title ? element.title : 'error'),
      benefit: (element?.benefit ? element.benefit : 'error'),
      detail: (element?.detail ? element.detail : 'error'),
      tags: (element?.tags ? element.tags : ['error']),
      price: (element?.price ? element.price : 0),
      img: (element?.img ? element.img : 'error'),
      currency: (element?.currency ? element.currency : 'error'),
      UUID: `${(element?.title ? element.title : 'error').replace(/\s/g, '')}-${(element?.price ? element.price : 0)}-${(element?.img ? element.img : 'error')}`,
    }
    Data.products.push(objToPush)
    // objToPush = null
  }
}
}


export default function Home() {
  initializedata()

  console.log(Data.products)
  // Data.products.pop()


  return (
    <main className={styles.main}>
      {/* {graphqlll} */}
      {/* {titles} */}
      <div className={styles.grid}>

        {Data.products.map((prop) => <Pdp item={prop} key={prop.UUID} />)}

      </div>
    </main>
  );
  
}



interface IPDPProps {
  item: Iproducts
}

function Pdp(props: IPDPProps) {

  return (
    <a
      href={`/product/${props.item.title.replace(/\s/g, '')}`}
      className={styles.card}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.item.img} />
      <br />
      <br />
      <h3 style={{ color: 'white' }}>
        {props.item.benefit}
      </h3>
      <h2>
        {props.item.title}
      </h2>
      <p style={{ opacity: 0.6 }}>| {props.item.tags.map((tag) => (`${tag} | `))}</p>
      <br />
      <p><b>{props.item.currency}{props.item.price}</b></p>
    </a>
  )
}

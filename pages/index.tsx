import Image from "next/image";
import styles from "./../styles/Home.module.css";
import Iproducts, { Data } from "../db";
import { gql } from "@apollo/client";
import createApolloClient from "../graphql/appollo-client";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* {graphqlll} */}
      <div className={styles.grid}>

        {Data.products.map((prop) => <Pdp item={prop} />)}

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
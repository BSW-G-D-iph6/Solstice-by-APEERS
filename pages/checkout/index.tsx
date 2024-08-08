import { Data } from "@/db";
import { useAppDispatch, useAppSelector } from "@/store";
import { removefrombasket } from "@/store/authslice";
import { initializedata } from "..";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";


export default function Checkout() {
    initializedata()
    const BasketState = useAppSelector((state) => state.auth.authState);
    const dispatch = useAppDispatch();


    // function send() {
    //     //  const { Client, Events, GatewayIntentBits, MessagePayload, Message, Embed } = require("discord.js");

    //     const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    //     client.guilds.cache.forEach((guild: { name: any; id: any; }) => {
    //         console.log(`----------------------${guild.name} | ${guild.id}`);
    //     })

    //     client.on("ready", () => {
    //         console.log("bot is online");

    //     });

    //     client.once(Events.ClientReady, (c: { user: { tag: any; }; }) => {
    //         console.log(`Ready! Logged in as ${c.user.tag}`);
    //         // client.users.fetch(`1112732302942937129`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
    //         // client.users.fetch(`970690342410149928`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
    //         client.channels.fetch(`1164208081081745521`).then((user: any) => user.send(`BOO *bahahah*, ik u got scared`))
    //     });

    //     // Log in to Discord with your client's token
    //     client.login('MTE1NjUxNzE5Mzc0ODU3ODM1NA.Gaxadb.CIKaxnWKdHGSjDjN6bfNOcw-py-W-3Gslozybg');
    // }

    let Price = 0

    const [sent, setsent] = useState(false)
    function price(price: number) {

        Price = Price + price


        return price;
    }

    const auth = useAuth()




    async function order() {
        // BasketState.map((item) => item.id)

        try {

            const request1 = new Request("/api/hello", {
                method: "POST",
                body: JSON.stringify({
                    "ids": BasketState.map((item) => item.id),
                    "userid": auth.userId
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const response = await fetch(request1)
            console.log(response.status)


        } catch (e) {
            console.log(e)
        }
        setsent(true)
    }

    return (
        <>


            {auth.isSignedIn ? (


                <>
                    {sent ? (<></>) : (<></>)}
                    {BasketState.length == 0 ? (<><br /><h1 style={{ textAlign: 'center' }}>Your basket is currently Empty</h1><br /><p>You can add items to your basket in the shop</p><br /><br /><br /><br /></>) : ''}
                    <br /><h3>Your Items</h3><br />

                    <table>

                        <tbody>
                            {BasketState.map((item) => {
                                return (<tr>
                                    <td><img width="30px" src={Data?.products.find((element) => (element.UUID == item.id))?.img} alt="Product Image" /></td>

                                    <td><a href={`product/${Data?.products.find((element) => (element.UUID == item.id))?.title.replace(/\s/g, '')}`}>{Data?.products.find((element) => (element.UUID == item.id))?.title}</a></td>
                                    <td>{Data?.products.find((element) => (element.UUID == item.id))?.benefit}</td>
                                    <td>{Data?.products.find((element) => (element.UUID == item.id))?.currency}{price(Data?.products.find((element) => (element.UUID == item.id))?.price ?? 0)}</td>

                                </tr>
                                )
                            }
                            )}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total: £{Price}</td>

                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <br />
                    <button onClick={() => order()} className={`btn btn-outline-${sent ? "success" : "info"}`} style={{ marginLeft: "80%" }} >
                        {sent ? "Order Sent!" : "Place Order"}
                    </button>
                    <br />
                    <br />

                </>







            ) : (<><br /><br /><br /><h1 style={{ textAlign: "center" }}>You are not signed in, Please Sign in</h1><br /><br /><br /><br /><br /></>)}
        </>
    )
}


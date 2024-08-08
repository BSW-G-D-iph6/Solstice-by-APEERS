// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client, Embed, EmbedBuilder, Events, GatewayIntentBits } from 'discord.js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { initializedata } from '..'
import { useAppDispatch, useAppSelector } from '@/store'
import { clerkClient } from '@clerk/nextjs/server'
import { Data } from '@/db'

type Data = {
  name: string
}

type Prod = {
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { ids, userid } = req.body




  const IDs = ``

  // BasketState.forEach(() => )
  const responsefrom = await clerkClient.users.getUser(userid ? userid : "abc");



  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.guilds.cache.forEach((guild: { name: any; id: any; }) => {
    console.log(`----------------------${guild.name} | ${guild.id}`);
  })

  client.on("ready", () => {
    console.log("bot is online");

  });


  const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`New Order by ${responsefrom.fullName}`)
    .setURL('https://sba.vercel.app/')
    .setAuthor({ name: 'Shopping Bot', iconURL: 'https://raw.githubusercontent.com/BSW-G-D-iph6/images/main/436296787_1643233403139663_4289626751213923428_n.jpeg', url: 'https://primepickz-shop.vercel.app/' })
    .setDescription(`New order by @${responsefrom.username}`)
    .setThumbnail(responsefrom.imageUrl)
    // .setImage('https://i.imgur.com/AfFp7pu.png') // Main image

    .addFields(
      ids?.map((product: any, i: number) => (
        // const datalocal = Data?.products.find((element) => (element.title.replace(/\s/g, '') == router.query.slug));



        { name: `*PRODUCT ${i + 1}*:`, value: `ID:${product} \n Name: ${Data?.products.find((element) => (element.UUID) == product)?.title} \n Price: ${Data?.products.find((element) => (element.UUID) == product)?.price} \n Link: https://primepickz-shop.vercel.app/products/${Data?.products.find((element) => (element.UUID) == product)?.title.replace(/\s/g, '')}  \n Image URL: ${Data?.products.find((element) => (element.UUID) == product)?.img}`, }
      ))
      // { name: 'Regular field title', value: 'Some value here' },
      // { name: '\u200B', value: '\u200B' },
      // { name: 'Inline field title', value: 'Some value here', inline: true },
      // { name: 'Inline field title', value: 'Some value here', inline: true },

    )
    .addFields({ name: 'User Email:', value: responsefrom?.emailAddresses[0].emailAddress })
    // .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'New Order', iconURL: 'https://raw.githubusercontent.com/BSW-G-D-iph6/images/main/436296787_1643233403139663_4289626751213923428_n.jpeg' });

  // client.once(Events.ClientReady, (c: { user: { tag: any; }; }) => {
  //   console.log(`Ready! Logged in as ${c.user.tag}`);
  //   // client.users.fetch(`1112732302942937129`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
  //   // client.users.fetch(`970690342410149928`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
  //   // client.channels.fetch(`1164208081081745521`).then((user: any) => user.send(`BOO *bahahah*, ik u got scared`))
  //   client.channels.fetch(`1270349143201808477`).then((user: any) => user.send(`Products: ${ids.map((product: any) => (`${product} \n`))}`))
  // });

  client.once(Events.ClientReady, (c: { user: { tag: any; }; }) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    // client.users.fetch(`1112732302942937129`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
    // client.users.fetch(`970690342410149928`).then(user => user.send(`# BOT ACTIVE === ${date}-${hour}:${min}:${sec}`))
    // client.channels.fetch(`1164208081081745521`).then((user: any) => user.send(`BOO *bahahah*, ik u got scared`))
    client.channels.fetch(`channel_id`).then((user: any) => user.send({ embeds: [exampleEmbed] }))
  });

  // Log in to Discord with your client's token

  // client.login("UR TOKEN")


  
  res.status(200).json({ name: ` ${ids.map((product: any) => (`${product} `))}` })
}

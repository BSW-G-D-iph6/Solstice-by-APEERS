
## Setting up Clerk signin
Add these to your env.local file:
 <br/> <br/>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2hhbXBpb24tZ251LTY3LmNsZXJrLmFjY291bnRzLmRldiQ <br/>
CLERK_SECRET_KEY=sk_test_FRQGB6Ka2BeGqZZnk87oauF6OQb71eDNjmTEEdVzkh <br/>
NEXT_PUBLIC_JAVA=false <br/>

**NEXT_PUBLIC_JAVA** is if you are using the JAVA Backend to get the catalogue, if it's set to true, you can clear the existing array in **db.ts**, if it's false, then it will only take the catalouge from the array <br/>
 <br/>
 the two on top can be obtained from the Clerk site after registering

 ## Setting up Discord Checkout

 It sends an order to a discord channel, in the `pages/api/hello.ts`, there will be a place to enter your bot Token along with the channel to send it, there is also commented code for sending to a DM (you must create a discord bot along with a discord server and add your bot to the server),

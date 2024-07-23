import { FooterComp } from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


// const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
//   ssr: false
// });

export default function App({ Component, pageProps }: AppProps) {
  // persistStore(store);

  return (
  <>

        {/* <div style={{ textAlign: 'end' }}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn></div> */}
        <Navbar />
        <div className="blurMain">
          <Component {...pageProps} />
        <FooterComp />

        </div>
        </>
  )
   
}

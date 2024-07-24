import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./../store";


import { persistStore } from "redux-persist";
import dynamic from "next/dynamic";
import { FooterComp } from "@/components/footer";

// const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
//   ssr: false
// });

export default function App({ Component, pageProps }: AppProps) {
  // persistStore(store);
  persistStore(store);

  return (
  <>
      <Provider store={store}>
        <ClerkProvider>

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
        </ClerkProvider>
      </Provider>
        </>
  )
   
}

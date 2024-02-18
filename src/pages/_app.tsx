import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";

export default function App({ Component, pageProps }: AppProps) {
  return(

    <main className={`${GeistSans.variable}`}>
    <Component {...pageProps} />
  </main>
    )
}

import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"

import "@/styles/globals.css"

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], display: "swap" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
  )
}

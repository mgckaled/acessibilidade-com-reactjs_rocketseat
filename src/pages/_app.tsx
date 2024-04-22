import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import { useEffect } from "react"

import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter"

import "@/styles/globals.css"

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], display: "swap" })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
  )
}

import * as Dialog from "@radix-ui/react-dialog"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import GithubLogoImg from "../assets/github-logo.svg"
import LogoImg from "../assets/logo.svg"

import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'></meta>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>Desenvolvendo uma web acessível | Rocketseat Blog</title>
        <meta
          name='description'
          content='Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para isas de tudo isso'
        ></meta>
      </Head>

      <header className={styles.header}>
        <Image src={LogoImg} alt='blog logo image' width={286 / 2} unoptimized />
        <nav className={styles.nav}>
          <a href='https://github.com/mgckaled' target='_blank' aria-label='Github'>
            <Image src={GithubLogoImg} alt='github logo icon' width={28} height={28} unoptimized />
          </a>
        </nav>
      </header>

      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>

            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para
              além de tudo isso
            </h2>
          </header>

          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico mundial, diversas empresas passaram a
            adotar critérios de desenvolvimento acessível em seus projetos — por uma questão prática ou por exigências
            legais —, no entanto, ainda faltam recursos e consciência do que de fato é inclusivo na internet para
            pessoas com deficiências.
          </p>

          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre o assunto, não encará-lo apenas na
            ótica técnica ou prática. Acessibilidade passou a ser vista como um desafio (ou tendência) para o
            ecossistema tech e não como filosofia natural daquilo que condiz com os princípios básicos da web: acessível
            para humanos. Tal afirmação está na W3C.
          </p>

          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>

      <footer className={styles.footer}>
        <Image src={LogoImg} alt='blog logo image' width={286 / 2} unoptimized />

        <nav className={styles.nav} aria-label='rodape'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type='button'>Termos de uso</button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />

              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description>Esses são os termos de uso</Dialog.Description>
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>Fechar</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </footer>
    </>
  )
}

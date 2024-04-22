import Head from "next/head"
import Image from "next/image"

import GithubLogoImg from "../assets/github-logo.svg"
import LogoImg from "../assets/logo.svg"

import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Acessibilidade com React.js</title>
      </Head>
      <div className={styles.header}>
        <Image src={LogoImg} alt='rockeseat logo' width={286 / 2} />
        <div className={styles.nav}>
          <a href='https://github.com/mgckaled'>
            <Image src={GithubLogoImg} alt='github logo icon' width={28} height={28} />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Desenvolvendo uma web acessível</h2>

        <h4>
          Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de
          tudo isso
        </h4>

        <p>
          Acessibilidade se tornou uma tendência no ecossistema tecnológico mundial, diversas empresas passaram a adotar
          critérios de desenvolvimento acessível em seus projetos — por uma questão prática ou por exigências legais —,
          no entanto, ainda faltam recursos e consciência do que de fato é inclusivo na internet para pessoas com
          deficiências.
        </p>

        <p>
          Para abordar este tema, é preciso ter uma perspectiva cultural sobre o assunto, não encará-lo apenas na ótica
          técnica ou prática. Acessibilidade passou a ser vista como um desafio (ou tendência) para o ecossistema tech e
          não como filosofia natural daquilo que condiz com os princípios básicos da web: acessível para humanos. Tal
          afirmação está na W3C.
        </p>

        <h3>O que é acessibilidade, afinal?</h3>
      </div>
    </div>
  )
}

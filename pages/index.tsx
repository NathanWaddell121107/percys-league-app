import Head from 'next/head'
import MainPage from '../presentation/components/main-page'
import { GlobalStyle } from '../presentation/components/global-theme'
import Header from '../presentation/components/header'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Percys League</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainPage />
    </>
  )
}
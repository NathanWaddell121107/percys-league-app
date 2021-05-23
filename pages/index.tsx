import Head from 'next/head'
import MainPage from '../presentation/components/main-page'
import { GlobalStyle } from '../presentation/components/global-theme'
import Header from '../presentation/components/header'
import { connectToDatabase } from '../db/mongodb'

interface HomeProps {
  isConnected: boolean;
}

export default function Home({ isConnected }: HomeProps) {
  console.log('isConnected: ', isConnected)
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

export async function getServerSideProps() {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
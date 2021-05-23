import Head from 'next/head'
import MainPage from '../presentation/components/main-page'
import { GlobalStyle } from '../presentation/components/global-theme'
import Header from '../presentation/components/header'
import { connectToDatabase } from '../db/mongodb'

interface HomeProps {
  databaseConnected: boolean;
}

export default function Home({ databaseConnected }: HomeProps) {
  console.log('databaseConnected: ', databaseConnected)
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
  const client = await connectToDatabase()
  const databaseConnected = client.isConnected()

  return {
    props: { databaseConnected },
  }
}

import MainPage from '../presentation/components/main-page'
import { connectToDatabase } from '../db/mongodb'
import Layout from '../presentation/components/layout'

interface HomeProps {
  databaseConnected: boolean;
}

export default function Home({ databaseConnected }: HomeProps) {
  console.log('databaseConnected: ', databaseConnected)
  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}

export async function getServerSideProps() {
  const client = await connectToDatabase()
  const databaseConnected = client.isConnected()

  return {
    props: { databaseConnected },
  }
}

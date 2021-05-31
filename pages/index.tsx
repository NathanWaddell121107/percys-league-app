import MainPage from '../presentation/components/main-page'
import { connectToDatabase } from '../db/mongodb'
import Layout from '../presentation/components/layout'

export default function Home() {
	return (
		<Layout>
			<MainPage />
		</Layout>
	)
}

export async function getServerSideProps() {
	await connectToDatabase()
}

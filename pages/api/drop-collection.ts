import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const dropCollection = async (req: NextApiRequest, res: NextApiResponse) => {
	const { collection } = req.body
	try {
		const client = await connectToDatabase()
		await client.db().collection(collection).drop()
		res.json({ success: true })
	} catch (error) {
		res.status(error.status || 400).end(error.message)
	}
}

export default dropCollection

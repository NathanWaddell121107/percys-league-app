import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../db/mongodb'

const dropCollection = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
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

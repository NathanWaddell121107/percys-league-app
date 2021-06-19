import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../db/mongodb'

const getSelectedPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const client = await connectToDatabase()
	const players = await client
		.db()
		.collection('selectedplayers')
		.find({})
		.toArray()
	res.json(players)
}

export default getSelectedPlayers

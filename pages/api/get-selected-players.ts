import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const getSelectedPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const client = await connectToDatabase()
	const players = await client
		.db()
		.collection('selectedplayers')
		.find({})
		.toArray()
	res.json(players)
}

export default getSelectedPlayers

import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../db/mongodb'

const getPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const client = await connectToDatabase()
	const players = await client.db().collection('players').find({}).toArray()
	res.json(players)
}

export default getPlayers

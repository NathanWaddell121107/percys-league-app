import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const getPlayers = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await connectToDatabase()
	const players = await client.db().collection('players').find({}).toArray()
	res.json(players)
}

export default getPlayers

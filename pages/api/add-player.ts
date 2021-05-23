import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const addPlayer = async (req: NextApiRequest, res: NextApiResponse) => {
	const { playerName } = req.body
	const client = await connectToDatabase()
	const addedPlayer = await client
		.db()
		.collection('players')
		.insertOne({ name: playerName })
	res.json(addedPlayer)
}

export default addPlayer

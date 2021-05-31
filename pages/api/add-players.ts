import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const addPlayers = async (req: NextApiRequest, res: NextApiResponse) => {
	const { playerNames } = req.body
	try {
		const client = await connectToDatabase()
		const addedPlayers = await client
			.db()
			.collection('players')
			.insertMany(playerNames)
		res.json(addedPlayers)
	} catch (error) {
		res.status(error.status || 400).end(error.message)
	}
}

export default addPlayers

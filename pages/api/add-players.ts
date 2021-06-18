import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../db/mongodb'

const addPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
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

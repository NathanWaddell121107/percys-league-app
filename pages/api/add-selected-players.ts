import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const addSelectedPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { players } = req.body
	const selectedPlayersDocument = {
		date: new Date(),
		selectedPlayers: players
	}
	try {
		const client = await connectToDatabase()
		const addedPlayers = await client
			.db()
			.collection('selectedplayers')
			.insert(selectedPlayersDocument)
		res.json(addedPlayers)
	} catch (error) {
		res.status(error.status || 400).end(error.message)
	}
}

export default addSelectedPlayers

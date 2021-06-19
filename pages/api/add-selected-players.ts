import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../db/mongodb'
import getDateObject from '../../presentation/components/util/get-date-object'

const addSelectedPlayers = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const { players } = req.body
	const selectedPlayersDocument = {
		date: getDateObject(),
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

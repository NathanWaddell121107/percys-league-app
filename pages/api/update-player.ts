import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectID } from 'mongodb'
import { Player } from '../../presentation/interfaces/player'

const updatePlayer = async (req: NextApiRequest, res: NextApiResponse) => {
	const { player } = req.body
	const playerCopy: Player = Object.assign({}, player)
	delete playerCopy._id
	const objId = new ObjectID(player._id)
	try {
		const client = await connectToDatabase()
		const updatedPlayer = await client
			.db()
			.collection('players')
			.findOneAndUpdate({ _id: objId }, { $set: playerCopy })
		res.json(updatedPlayer)
	} catch (error) {
		res.status(error.status || 400).end(error.message)
	}
}

export default updatePlayer

import { connectToDatabase } from '../../db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectID } from 'mongodb'

const addPlayer = async (req: NextApiRequest, res: NextApiResponse) => {
	const { playerId } = req.body
	const objId = new ObjectID(playerId)
	const client = await connectToDatabase()
	const deletedPlayer = await client
		.db()
		.collection('players')
		.findOneAndDelete({ _id: objId })
	res.json(deletedPlayer)
}

export default addPlayer

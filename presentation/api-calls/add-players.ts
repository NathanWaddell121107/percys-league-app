import axios from 'axios'
import { Player } from '../components/add-players'

export default async function addPlayersPost(
	playerNames: Player[]
): Promise<{ success: boolean; error?: string }> {
	try {
		const result = await axios.post(`${window.location.origin}/api/add-players`, {
			playerNames
		})
		if (result.data.insertedCount > 0) {
			return { success: true }
		} else {
			return { success: false }
		}
	} catch (err) {
		console.log('error adding a player: ', err)
		return { success: false, error: err }
	}
}

import axios from 'axios'
import { DatabaseMutation } from '../../../interfaces/database-mutation'
import { FetchPlayers } from '../../../interfaces/fetch-players'
import { Player } from '../../../interfaces/player'

export async function fetchPlayers(): Promise<FetchPlayers> {
	try {
		const result = await axios.get(`${window.location.origin}/api/get-players`)
		const players: Player[] = result.data
		if (players && players.length > 0) return { players, success: true }
		else return { success: false }
	} catch (error) {
		console.log('error fetching the players: ', error)
		return { success: false, error }
	}
}

export async function playerDelete(
	playerId: string
): Promise<DatabaseMutation> {
	try {
		const result = await axios.post(
			`${window.location.origin}/api/delete-player`,
			{
				playerId
			}
		)
		if (result.data.value._id) return { success: true }
		else return { success: false }
	} catch (error) {
		console.log('error deleting the player: ', error)
		return { success: false, error }
	}
}

export async function addPlayersPost(
	playerNames: Player[]
): Promise<DatabaseMutation> {
	try {
		const result = await axios.post(`${window.location.origin}/api/add-players`, {
			playerNames
		})
		if (result.data.insertedCount > 0) return { success: true }
		else return { success: false }
	} catch (error) {
		console.log('error adding a player: ', error)
		return { success: false, error }
	}
}

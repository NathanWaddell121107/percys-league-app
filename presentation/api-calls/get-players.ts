import getPlayers from '../../pages/api/get-players'
import axios from 'axios'

export default async function fetchPlayers() {
	const playerNames = await axios.get(
		`${window.location.origin}/api/get-players`
	)
	console.log('playerNames: ', playerNames)
	return playerNames
}

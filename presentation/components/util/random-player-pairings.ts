import { MatchedPlayers } from '../../interfaces/matched-players'
import { Player } from '../../interfaces/player'

const randomPlayerPairings = (playersList: Player[]): MatchedPlayers[] => {
	const splitPlayersAndShuffle = (
		playersList: Player[]
	): { arr1: Player[]; arr2: Player[] } => {
		const arr1 = playersList
			.slice(0, playersList.length / 2)
			.sort(() => 0.5 - Math.random())
		const arr2 = playersList
			.slice(playersList.length / 2)
			.sort(() => 0.5 - Math.random())
		return { arr1, arr2 }
	}

	const matchedPlayersList = []

	if (playersList.length % 2 !== 0 && playersList.includes({ name: 'Bye' })) {
		// If there is an even amount of players, and an existing Bye, we need to remove the bye from the list
		playersList = playersList.filter((p) => {
			return p.name !== 'Bye'
		})
	} else if (
		playersList.length % 2 !== 0 &&
		!playersList.includes({ name: 'Bye' })
	) {
		// If there is an uneven amount of players, we need to add a bye to the list
		playersList.push({ name: 'Bye' })
	}

	// Split the list of players in half and shuffle them to make it random each time
	const { arr1, arr2 } = splitPlayersAndShuffle(playersList)

	while (arr1.length) {
		matchedPlayersList.push({
			player1: arr1.pop(),
			player2: arr2.pop()
		})
	}
	console.log('matchedPlayersList: ', matchedPlayersList)
	return matchedPlayersList
}

export default randomPlayerPairings

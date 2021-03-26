const randomPlayerPairings = (
	playersList: string[]
): Array<{
	player1: string | undefined
	player2: string | undefined
	setId: number
}> => {
	const splitPlayersAndShuffle = (
		playersList: string[]
	): { arr1: string[]; arr2: string[] } => {
		const arr1 = playersList
			.slice(0, playersList.length / 2)
			.sort(() => 0.5 - Math.random())
		const arr2 = playersList
			.slice(playersList.length / 2)
			.sort(() => 0.5 - Math.random())
		return { arr1, arr2 }
	}

	const matchedPlayersList = []
	let setId = 1

	if (playersList.length % 2 !== 0 && !playersList.includes('Bye')) {
		// If there is an uneven amount of players, we need to add a bye to the list
		playersList.push('Bye')
	} else if (playersList.length % 2 === 0 && playersList.includes('Bye')) {
		// If there is an even amount of players, and an existing Bye, we need to remove the bye from the list
		playersList = playersList.filter((p) => {
			return p !== 'Bye'
		})
	}

	// Split the list of players in half and shuffle them to make it random each time
	const { arr1, arr2 } = splitPlayersAndShuffle(playersList)

	while (arr1.length) {
		matchedPlayersList.push({
			player1: arr1.pop(),
			player2: arr2.pop(),
			setId: setId
		})
		setId++
	}
	console.log('matchedPlayersList: ', matchedPlayersList)
	return matchedPlayersList
}

export default randomPlayerPairings

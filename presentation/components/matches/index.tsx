import * as React from 'react'
import * as Styled from './matches.styles'
import { Player } from '../../interfaces/player'
import LoadingIndicator from '../loading-indicator'
import { fetchPlayers } from '../util/player-methods'
import SelectPlayers from './select-players'
import { Button } from 'reactstrap'
import MatchedPlayersGames from './matched-players'

const Matches: React.FC = () => {
	const [selectPlayersModalIsOpen, setSelectPlayersModalIsOpen] = React.useState(
		true
	)
	const [matchPlayers, setMatchPlayers] = React.useState(false)
	const [selectedPlayers, setSelectedPlayers] = React.useState<Array<Player>>([])
	const [playersList, setPlayersList] = React.useState<Array<Player>>()

	React.useEffect(() => {
		const getPlayers = async () => {
			const { players, success, error } = await fetchPlayers()
			if (!success) {
				if (error) alert('Uh-oh, couldn`t retrieve the players list')
				else
					console.log(
						'looks like there may not be any players yet. Double check the players collection'
					)
			} else if (players && players.length > 0) {
				setPlayersList(players)
			}
		}
		getPlayers()
	}, [])

	if (!playersList) {
		return <LoadingIndicator />
	}

	return (
		<>
			{selectPlayersModalIsOpen && (
				<SelectPlayers
					selectPlayersModalIsOpen={selectPlayersModalIsOpen}
					setSelectPlayersModalIsOpen={setSelectPlayersModalIsOpen}
					players={playersList}
					setSelectedPlayers={setSelectedPlayers}
					selectedPlayers={selectedPlayers}
					setMatchPlayers={setMatchPlayers}
				/>
			)}
			{!selectedPlayers && (
				<Styled.SelectPlayersMessage>
					<span>Please select the players you would like to create games for</span>
					<Button
						onClick={() => setSelectPlayersModalIsOpen(true)}
						color="secondary">
						Select
					</Button>
				</Styled.SelectPlayersMessage>
			)}
			{matchPlayers && <MatchedPlayersGames selectedPlayers={selectedPlayers} />}
		</>
	)
}

export default Matches

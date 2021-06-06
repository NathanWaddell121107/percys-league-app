import * as React from 'react'
import * as Styled from './matches.styles'
import { Player } from '../../interfaces/player'
import LoadingIndicator from '../loading-indicator'
import { fetchPlayers, fetchSelectedPlayers } from '../util/player-methods'
import SelectPlayers from './select-players'
import { Button } from 'reactstrap'
import MatchedPlayersGames from './matched-players'

const Matches: React.FC = () => {
	const [selectPlayersModalIsOpen, setSelectPlayersModalIsOpen] =
		React.useState(false)
	const [matchPlayers, setMatchPlayers] = React.useState(false)
	const [selectedPlayers, setSelectedPlayers] = React.useState<Array<Player>>([])
	const [playersList, setPlayersList] = React.useState<Array<Player>>()
	const [loading, setLoading] = React.useState(true)

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

	React.useEffect(() => {
		const getSelectedPlayers = async () => {
			const { players, success, error } = await fetchSelectedPlayers()
			if (!success) {
				if (error) alert('Uh-oh, couldn`t retrieve the players list')
				else {
					console.log('looks like there may not be any selected players yet')
					setSelectPlayersModalIsOpen(true)
				}
			} else if (players && players.length > 0) {
				setMatchPlayers(true)
				setSelectedPlayers(players)
			}
		}
		setLoading(false)
		getSelectedPlayers()
	}, [])

	if (loading || !playersList) {
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
			{matchPlayers && (
				<MatchedPlayersGames
					selectedPlayers={selectedPlayers}
					setSelectPlayersModalIsOpen={setSelectPlayersModalIsOpen}
				/>
			)}
		</>
	)
}

export default Matches

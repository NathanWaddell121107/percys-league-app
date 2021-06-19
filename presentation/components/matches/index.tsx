import * as React from 'react'
import { Button } from 'reactstrap'
import { Player } from '../../interfaces/player'
import LoadingIndicator from '../loading-indicator'
import { fetchPlayers, fetchSelectedPlayers } from '../util/player-methods'
import MatchedPlayersGames from './matched-players'
import * as Styled from './matches.styles'
import SelectPlayers from './select-players'

const Matches: React.FC = () => {
	const [selectPlayersModalIsOpen, setSelectPlayersModalIsOpen] =
		React.useState(false)
	const [matchPlayers, setMatchPlayers] = React.useState(false)
	const [selectedPlayers, setSelectedPlayers] = React.useState<Player[]>([])
	const [playersList, setPlayersList] = React.useState<Player[]>()
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
		void getPlayers()
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
		void getSelectedPlayers()
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

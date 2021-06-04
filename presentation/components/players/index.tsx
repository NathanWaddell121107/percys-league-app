import * as React from 'react'
import * as Styled from './players.styles'
import { Button } from 'reactstrap'
import { Player } from '../../interfaces/player'
import AddPlayers from '../add-players'
import PlayersList from '../players-list'
import { fetchPlayers } from '../util/player-methods'
import LoadingIndicator from '../loading-indicator'

const Players: React.FC = () => {
	const [showAddPlayers, setShowAddPlayers] = React.useState(false)
	const [playersList, setPlayersList] = React.useState<Array<Player>>()
	const [userUpdatedPlayers, setUserUpdatedPlayers] = React.useState(false)

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
				setUserUpdatedPlayers(false)
			}
		}
		getPlayers()
	}, [userUpdatedPlayers])

	if (!playersList) {
		return <LoadingIndicator />
	}

	return (
		<Styled.PlayersWrapper>
			<PlayersList
				playersList={playersList}
				setUserUpdatedPlayers={setUserUpdatedPlayers}
			/>
			<Button
				style={{ marginTop: '1rem' }}
				onClick={() => setShowAddPlayers(true)}>
				Add Players
			</Button>
			{showAddPlayers && (
				<AddPlayers
					setShowAddPlayers={setShowAddPlayers}
					showAddPlayers={showAddPlayers}
					setUserUpdatedPlayers={setUserUpdatedPlayers}
				/>
			)}
		</Styled.PlayersWrapper>
	)
}

export default Players

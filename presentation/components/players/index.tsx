import * as React from 'react'
import { Button } from 'reactstrap'
import Link from 'next/link'
import { Player } from '../../interfaces/player'
import AddPlayers from '../add-players'
import LoadingIndicator from '../loading-indicator'
import PlayersList from '../players-list'
import { fetchPlayers } from '../util/player-methods'
import * as Styled from './players.styles'

const Players: React.FC = () => {
	const [showAddPlayers, setShowAddPlayers] = React.useState(false)
	const [playersList, setPlayersList] = React.useState<Player[]>()
	const [userUpdatedPlayers, setUserUpdatedPlayers] = React.useState(false)
	const [zeroPlayers, setZeroPlayers] = React.useState(false)

	React.useEffect(() => {
		const getPlayers = async () => {
			const { players, success, error } = await fetchPlayers()
			if (!success) {
				if (error) alert('Uh-oh, couldn`t retrieve the players list')
				else setZeroPlayers(true)
				console.log(
					'looks like there may not be any players yet. Double check the players collection'
				)
			} else if (players && players.length > 0) {
				setZeroPlayers(false)
				setPlayersList(players)
				setUserUpdatedPlayers(false)
			}
		}
		void getPlayers()
	}, [userUpdatedPlayers])

	if (!playersList && !zeroPlayers) {
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
			{playersList && (
				<Link href="/matches">
					<Button style={{ margin: '1rem 0' }} color="secondary">
						<span style={{ color: '#fff' }}>Create Matches</span>
					</Button>
				</Link>
			)}
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

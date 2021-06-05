import * as React from 'react'
import * as Styled from './matched-players.styles'
import { Player } from '../../../interfaces/player'
import randomPlayerPairings from '../../util/random-player-pairings'
import { MatchedPlayers } from '../../../interfaces/matched-players'
import { Table } from 'reactstrap'

interface MatchedPlayersProps {
	selectedPlayers: Player[]
}

const MatchedPlayersGames: React.FC<MatchedPlayersProps> = ({
	selectedPlayers
}) => {
	const [matchedPlayers, setMatchedPlayers] = React.useState<
		Array<MatchedPlayers>
	>()

	React.useEffect(() => {
		setMatchedPlayers(randomPlayerPairings(selectedPlayers))
	}, [])

	const createNameAndSkillLevel = (player: Player | undefined) => {
		if (!player) return ''
		return `(${player.skillLevel ?? '-'}) ${player.name}`
	}

	return (
		<Styled.MatchedPlayersWrapper>
			<Styled.TitleDiv>
				<h2>Games</h2>
			</Styled.TitleDiv>
			<Table
				style={{
					color: '#fff',
					maxWidth: '1200px',
					width: '95%',
					textAlign: 'center',
					tableLayout: 'fixed'
				}}
				bordered
				dark
				size="sm">
				<tbody>
					{matchedPlayers &&
						matchedPlayers.map((match, index) => {
							return (
								<tr key={index}>
									<td>{createNameAndSkillLevel(match.player1)}</td>
									<td>Vs</td>
									<td>{createNameAndSkillLevel(match.player2)}</td>
								</tr>
							)
						})}
				</tbody>
			</Table>
		</Styled.MatchedPlayersWrapper>
	)
}

export default MatchedPlayersGames

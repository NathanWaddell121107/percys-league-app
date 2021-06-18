import * as React from 'react'
import { Table } from 'reactstrap'
import { MatchedPlayers } from '../../../interfaces/matched-players'
import { Player } from '../../../interfaces/player'
import randomPlayerPairings from '../../util/random-player-pairings'
import * as Styled from './matched-players.styles'

interface MatchedPlayersProps {
	selectedPlayers: Player[]
	setSelectPlayersModalIsOpen: (selectPlayersModalIsOpen: boolean) => void
}

const MatchedPlayersGames: React.FC<MatchedPlayersProps> = ({
	selectedPlayers,
	setSelectPlayersModalIsOpen
}) => {
	const [matchedPlayers, setMatchedPlayers] = React.useState<MatchedPlayers[]>()

	React.useEffect(() => {
		setMatchedPlayers(randomPlayerPairings(selectedPlayers))
	}, [selectedPlayers])

	const createNameAndSkillLevel = (player: Player | undefined) => {
		if (!player) return ''
		return `(${player.skillLevel ?? '-'}) ${player.name}`
	}

	return (
		<Styled.MatchedPlayersWrapper>
			<Styled.TitleDiv>
				<h2>Games</h2>
				<span onClick={() => setSelectPlayersModalIsOpen(true)}>
					Change Players
				</span>
			</Styled.TitleDiv>
			<Table
				style={{
					color: '#fff',
					maxWidth: '1200px',
					tableLayout: 'fixed',
					textAlign: 'center',
					width: '95%'
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

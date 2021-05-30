import * as React from 'react'
import * as Styled from './players-list.styles'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Player } from '../../interfaces/player'

interface PlayersListProps {
	playersList?: Player[]
}

const PlayersList: React.FC<PlayersListProps> = ({ playersList }) => {
	return (
		<>
			<Styled.ListTitle>All Players</Styled.ListTitle>
			<ListGroup
				style={{
					marginTop: '1rem',
					maxHeight: '50vh',
					maxWidth: '88%',
					width: '1200px',
					color: 'black',
					overflowY: 'auto'
				}}>
				{playersList &&
					playersList.map((player, index) => {
						return (
							<ListGroupItem key={index}>
								<Styled.GroupItem>
									<span>{player.name}</span>
									<Button>Edit</Button>
								</Styled.GroupItem>
							</ListGroupItem>
						)
					})}
			</ListGroup>
		</>
	)
}

export default PlayersList

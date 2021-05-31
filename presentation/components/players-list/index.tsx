import * as React from 'react'
import * as Styled from './players-list.styles'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Player } from '../../interfaces/player'
import EditPlayer from '../edit-player'

interface PlayersListProps {
	playersList?: Player[]
	setUserUpdatedPlayers: (userUpdatedPlayers: boolean) => void
}

const PlayersList: React.FC<PlayersListProps> = ({
	playersList,
	setUserUpdatedPlayers
}) => {
	const [editPlayerModalIsOpen, setEditPlayerModalIsOpen] = React.useState(false)
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
									<span>
										{player.name} {player.skillLevel && `(${player.skillLevel})`}
									</span>
									<Button onClick={() => setEditPlayerModalIsOpen(true)}>Edit</Button>
									{editPlayerModalIsOpen && (
										<EditPlayer
											editPlayerModalIsOpen={editPlayerModalIsOpen}
											player={player}
											setEditPlayerModalIsOpen={setEditPlayerModalIsOpen}
											setUserUpdatedPlayers={setUserUpdatedPlayers}
										/>
									)}
								</Styled.GroupItem>
							</ListGroupItem>
						)
					})}
			</ListGroup>
		</>
	)
}

export default PlayersList

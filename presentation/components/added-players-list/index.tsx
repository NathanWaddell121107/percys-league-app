import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '../../interfaces/player'
import * as Styled from './added-players-list.styles'

interface AddedPlayersListProps {
	playersList?: Player[]
	removePlayer: (playerName: string) => void
}

const AddedPlayersList: React.FC<AddedPlayersListProps> = ({
	playersList,
	removePlayer
}) => {
	return (
		<ListGroup
			style={{
				marginTop: '1rem',
				maxHeight: '350px',
				minHeight: '100px',
				overflowY: 'auto'
			}}>
			{playersList &&
				playersList.map((player, index) => {
					return (
						<ListGroupItem key={index}>
							<Styled.GroupItem>
								{player.name}
								<FontAwesomeIcon
									style={{ cursor: 'pointer' }}
									color="black"
									icon={faTrash}
									onClick={() => removePlayer(player.name)}
								/>
							</Styled.GroupItem>
						</ListGroupItem>
					)
				})}
		</ListGroup>
	)
}

export default AddedPlayersList

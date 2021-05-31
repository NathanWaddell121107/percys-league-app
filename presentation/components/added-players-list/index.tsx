import * as React from 'react'
import * as Styled from './added-players-list.styles'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Player } from '../../interfaces/player'

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

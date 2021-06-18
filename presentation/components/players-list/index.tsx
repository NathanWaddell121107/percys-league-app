import * as React from 'react'
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Table
} from 'reactstrap'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '../../interfaces/player'
import DeletePlayerConfirmation from '../delete-player-confirmation'
import EditPlayer from '../edit-player'
import PlayerDetails from '../player-details'
import * as Styled from './players-list.styles'

interface PlayersListProps {
	playersList?: Player[]
	setUserUpdatedPlayers: (userUpdatedPlayers: boolean) => void
}

const PlayersList: React.FC<PlayersListProps> = ({
	playersList,
	setUserUpdatedPlayers
}) => {
	const [editPlayerModalIsOpen, setEditPlayerModalIsOpen] =
		React.useState(false)
	const [
		deletePlayerConfirmationModalIsOpen,
		setDeletePlayerConfirmationModalIsOpen
	] = React.useState(false)
	const [playerToBeEdited, setPlayerToBeEdited] = React.useState<Player>({
		name: ''
	})
	const [playerToBeDeleted, setPlayerToBeDeleted] = React.useState<Player>({
		name: ''
	})
	const [playerDetails, setPlayerDetails] = React.useState<Player>({ name: '' })
	const [playerDetailsModalIsOpen, setPlayerDetailsModalIsOpen] =
		React.useState(false)
	const [dropdownOpen, setDropdownOpen] = React.useState({
		open: false,
		playerIndex: 0
	})
	const toggle = (playerIndex: number) => {
		setDropdownOpen({ open: !dropdownOpen.open, playerIndex })
	}

	return (
		<>
			<Styled.TitleDiv>
				<Styled.ListTitle>Players List</Styled.ListTitle>
				<p>{`${playersList ? playersList.length : '0'} players`}</p>
			</Styled.TitleDiv>
			<Styled.TableWrapper>
				<Table size="sm" responsive dark>
					<thead>
						<tr>
							<th style={{ paddingLeft: '10px' }}>Rating</th>
							<th>Name</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{playersList &&
							playersList.map((player, index) => {
								return (
									<tr key={index}>
										<td style={{ paddingLeft: '10px' }}>{player.skillLevel}</td>
										<td>{player.name}</td>
										<td style={{ paddingRight: '0.5rem', textAlign: 'end' }}>
											<Dropdown
												isOpen={
													dropdownOpen.playerIndex === index &&
													dropdownOpen.open
												}
												toggle={() => toggle(index)}>
												<DropdownToggle
													style={{ cursor: 'pointer', paddingRight: '0.5rem' }}
													tag="a">
													<FontAwesomeIcon icon={faEllipsisH} />
												</DropdownToggle>
												<DropdownMenu>
													<DropdownItem
														onClick={() => {
															setPlayerDetails(player)
															setPlayerDetailsModalIsOpen(true)
														}}>
														Details
													</DropdownItem>
													<DropdownItem
														onClick={() => {
															setPlayerToBeEdited(player)
															setEditPlayerModalIsOpen(true)
														}}>
														Edit Player
													</DropdownItem>
													<DropdownItem
														onClick={() => {
															setPlayerToBeDeleted(player)
															setDeletePlayerConfirmationModalIsOpen(true)
														}}>
														Delete Player
													</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</td>
									</tr>
								)
							})}
					</tbody>
				</Table>
			</Styled.TableWrapper>
			{editPlayerModalIsOpen && (
				<EditPlayer
					editPlayerModalIsOpen={editPlayerModalIsOpen}
					player={playerToBeEdited}
					setEditPlayerModalIsOpen={setEditPlayerModalIsOpen}
					setUserUpdatedPlayers={setUserUpdatedPlayers}
				/>
			)}
			{playerDetailsModalIsOpen && (
				<PlayerDetails
					player={playerDetails}
					playerDetailsModalIsOpen={playerDetailsModalIsOpen}
					setPlayerDetailsModalIsOpen={setPlayerDetailsModalIsOpen}
				/>
			)}
			{deletePlayerConfirmationModalIsOpen && (
				<DeletePlayerConfirmation
					player={playerToBeDeleted}
					deletePlayerConfirmationModalIsOpen={
						deletePlayerConfirmationModalIsOpen
					}
					setDeletePlayerConfirmationModalIsOpen={
						setDeletePlayerConfirmationModalIsOpen
					}
					setUserUpdatedPlayers={setUserUpdatedPlayers}
				/>
			)}
		</>
	)
}

export default PlayersList

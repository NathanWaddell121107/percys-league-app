import * as React from 'react'
import * as Styled from './select-players.styles'
import {
	Button,
	ListGroupItem,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from 'reactstrap'
import { Player } from '../../../interfaces/player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface SelectPlayersProps {
	selectPlayersModalIsOpen: boolean
	setSelectPlayersModalIsOpen: (selectPlayersModalIsOpen: boolean) => void
	players: Player[]
	setSelectedPlayers: (players: Player[]) => void
	selectedPlayers: Player[]
	setMatchPlayers: (matchPlayers: boolean) => void
}

const SelectPlayers: React.FC<SelectPlayersProps> = ({
	selectPlayersModalIsOpen,
	setSelectPlayersModalIsOpen,
	players,
	setSelectedPlayers,
	selectedPlayers,
	setMatchPlayers
}) => {
	const playerIsSelected = (playerAtCurrentIndex: Player) => {
		if (!selectedPlayers) return false
		return selectedPlayers.includes(playerAtCurrentIndex)
	}

	return (
		<Modal style={{ color: 'black' }} size="lg" isOpen={selectPlayersModalIsOpen}>
			<ModalHeader>Select players</ModalHeader>
			<ModalBody>
				<Styled.Explanation>
					Click on the player names in the list below, then click the Create Games
					button
				</Styled.Explanation>
				<Styled.PlayersContainer>
					{players.map((player, index) => {
						return (
							<Styled.ListPlayer
								onClick={() => {
									if (playerIsSelected(player)) {
										// Remove the player from list if clicked twice
										const filteredList = selectedPlayers.filter(
											(p) => player._id !== p._id
										)
										setSelectedPlayers(filteredList)
									} else if (selectedPlayers && selectedPlayers.length > 0) {
										// Add selectedPlayers if there is already a list by concat
										setSelectedPlayers(selectedPlayers.concat(player))
									} else {
										// if first player, just create a new list
										setSelectedPlayers([player])
									}
								}}
								key={index}>
								{player.name}{' '}
								{playerIsSelected(player) && (
									<FontAwesomeIcon color="green" icon={faCheck} />
								)}
							</Styled.ListPlayer>
						)
					})}
				</Styled.PlayersContainer>
			</ModalBody>
			<ModalFooter>
				<Button
					onClick={() => setSelectPlayersModalIsOpen(false)}
					color="secondary">
					Cancel
				</Button>
				<Button
					onClick={() => {
						setSelectPlayersModalIsOpen(false)
						setMatchPlayers(true)
					}}
					color="primary">
					Create Games
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default SelectPlayers

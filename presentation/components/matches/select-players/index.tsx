import * as React from 'react'
import * as Styled from './select-players.styles'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Player } from '../../../interfaces/player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {
	addSelectedPlayersPost,
	dropCollection
} from '../../util/player-methods'

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
	const playerIsSelected = (playerAtCurrentIndex: Player): boolean => {
		if (!selectedPlayers) return false
		let foundMatch = false
		selectedPlayers.forEach((player) => {
			if (player._id === playerAtCurrentIndex._id) foundMatch = true
		})
		return foundMatch
	}
	const [shouldDeselectAll, setShouldDeselectAll] = React.useState(false)

	const addSelectedPlayersToDatabase = async (): Promise<void> => {
		if (!selectedPlayers) return
		const byesRemoved = selectedPlayers.filter((player) => player.name !== 'Bye')
		await dropCollection('selectedplayers')

		const { success, error } = await addSelectedPlayersPost(byesRemoved)

		if (success) {
			setSelectPlayersModalIsOpen(false)
			setMatchPlayers(true)
		} else {
			// TODO: add a real error message / notification
			alert('Uh-Oh selected players weren`t added correctly')
			console.log('error: ', error)
		}
	}

	return (
		<Modal style={{ color: 'black' }} size="lg" isOpen={selectPlayersModalIsOpen}>
			<ModalHeader>Select players</ModalHeader>
			<ModalBody>
				<Styled.Explanation>
					Click on the player names in the list below to select (click twice to
					unselect), then click the Create Games button
				</Styled.Explanation>
				<Styled.SelectAll>
					<span
						onClick={() => {
							if (shouldDeselectAll) {
								setSelectedPlayers([])
							} else {
								setSelectedPlayers(players)
							}
							setShouldDeselectAll(!shouldDeselectAll)
						}}>
						{shouldDeselectAll ? 'Unselect All' : 'Select All'}
					</span>
				</Styled.SelectAll>
				<Styled.PlayersContainer>
					{players.map((player, index) => {
						if (player.name === 'Bye') return null
						return (
							<Styled.ListPlayer
								onClick={() => {
									if (playerIsSelected(player)) {
										// Remove the player from list if already selected and user clicks them again
										const filteredList = selectedPlayers.filter(
											(p) => player._id !== p._id
										)
										setSelectedPlayers(filteredList)
									} else if (selectedPlayers && selectedPlayers.length > 0) {
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
					onClick={async () => await addSelectedPlayersToDatabase()}
					color="primary">
					Create Games
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default SelectPlayers

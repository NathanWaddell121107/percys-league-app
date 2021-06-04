import * as React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Player } from '../../interfaces/player'
import { playerDelete } from '../util/player-methods'

interface DeletePlayerConfirmationProps {
	player: Player
	deletePlayerConfirmationModalIsOpen: boolean
	setDeletePlayerConfirmationModalIsOpen: (
		deletePlayerConfirmationModalIsOpen: boolean
	) => void
	setUserUpdatedPlayers: (userUpdatedPlayers: boolean) => void
}

const DeletePlayerConfirmation: React.FC<DeletePlayerConfirmationProps> = ({
	player,
	deletePlayerConfirmationModalIsOpen,
	setDeletePlayerConfirmationModalIsOpen,
	setUserUpdatedPlayers
}) => {
	const submitDeletePlayer = async () => {
		if (!player._id) return
		const { success, error } = await playerDelete(player._id)
		// TODO: handle error with a real message / notification
		if (error) alert('Uh-oh, there was an error deleting the player')
		else if (success) {
			setUserUpdatedPlayers(true)
			setDeletePlayerConfirmationModalIsOpen(false)
		}
	}
	return (
		<Modal
			style={{ color: 'black' }}
			isOpen={deletePlayerConfirmationModalIsOpen}>
			<ModalHeader>{`Delete Player - ${player.name}`}</ModalHeader>
			<ModalBody>You are about to delete this player, are you sure?</ModalBody>
			<ModalFooter>
				<Button
					onClick={() => setDeletePlayerConfirmationModalIsOpen(false)}
					color="secondary">
					Cancel
				</Button>
				<Button onClick={() => submitDeletePlayer()} color="primary">
					Delete
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default DeletePlayerConfirmation

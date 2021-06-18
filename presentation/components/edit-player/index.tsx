import * as React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Player } from '../../interfaces/player'
import { updatePlayer } from '../util/player-methods'
import EditPlayerForm from './edit-player-form'

interface EditPlayerProps {
	editPlayerModalIsOpen: boolean
	player: Player
	setEditPlayerModalIsOpen: (editPlayerModalIsOpen: boolean) => void
	setUserUpdatedPlayers: (userUpdatedPlayers: boolean) => void
}

const EditPlayer: React.FC<EditPlayerProps> = ({
	editPlayerModalIsOpen,
	player,
	setEditPlayerModalIsOpen,
	setUserUpdatedPlayers
}) => {
	const [editPlayer, setEditPlayer] = React.useState<Player>(player)

	const submitEditPlayer = async () => {
		const { success, error } = await updatePlayer(editPlayer)
		// TODO: handle error with a real message / notification
		if (error) alert('Uh-oh, there was an error updating the player')
		else if (success) {
			setUserUpdatedPlayers(true)
			setEditPlayerModalIsOpen(false)
		}
	}

	return (
		<Modal style={{ color: 'black' }} isOpen={editPlayerModalIsOpen} size="lg">
			<ModalHeader>{`Edit Player - ${player.name}`}</ModalHeader>
			<ModalBody>
				<EditPlayerForm editPlayer={editPlayer} setEditPlayer={setEditPlayer} />
			</ModalBody>
			<ModalFooter>
				<Button
					color="secondary"
					onClick={() => setEditPlayerModalIsOpen(false)}>
					Cancel
				</Button>
				<Button color="primary" onClick={() => submitEditPlayer()}>
					Save
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default EditPlayer

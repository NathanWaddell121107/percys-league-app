import * as React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Player } from '../../interfaces/player'
import EditPlayerForm from './edit-player-form'

interface EditPlayerProps {
	editPlayerModalIsOpen: boolean
	player: Player
	setEditPlayerModalIsOpen: (editPlayerModalIsOpen: boolean) => void
}

const EditPlayer: React.FC<EditPlayerProps> = ({
	editPlayerModalIsOpen,
	player,
	setEditPlayerModalIsOpen
}) => {
	const [editPlayer, setEditPlayer] = React.useState<Player>(player)

	const submitEditPlayer = async () => {
		console.log('editPlayer after submit: ', editPlayer)
	}

	return (
		<Modal style={{ color: 'black' }} isOpen={editPlayerModalIsOpen} size="lg">
			<ModalHeader>{`Edit Player - ${player.name}`}</ModalHeader>
			<ModalBody>
				<EditPlayerForm editPlayer={editPlayer} setEditPlayer={setEditPlayer} />
			</ModalBody>
			<ModalFooter>
				<Button color="secondary" onClick={() => setEditPlayerModalIsOpen(false)}>
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

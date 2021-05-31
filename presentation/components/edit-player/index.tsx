import * as React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Player } from '../../interfaces/player'

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
	return (
		<Modal isOpen={editPlayerModalIsOpen} size="lg">
			<ModalHeader>{`Edit Player (${player})`}</ModalHeader>
			<ModalBody></ModalBody>
			<ModalFooter>
				<Button onClick={() => setEditPlayerModalIsOpen}>Cancel</Button>
				<Button>Save</Button>
			</ModalFooter>
		</Modal>
	)
}

export default EditPlayer

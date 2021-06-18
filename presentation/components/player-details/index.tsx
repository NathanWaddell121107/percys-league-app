import * as React from 'react'
import {
	Button,
	ListGroup,
	ListGroupItem,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from 'reactstrap'
import { Player } from '../../interfaces/player'
import findGameTypes from '../util/find-game-types'
import * as Styled from './player-details.styles'

interface PlayerDetailsProps {
	player: Player
	playerDetailsModalIsOpen: boolean
	setPlayerDetailsModalIsOpen: (playerDetailsModalIsOpen: boolean) => void
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({
	player,
	playerDetailsModalIsOpen,
	setPlayerDetailsModalIsOpen
}) => {
	return (
		<Modal
			style={{ color: 'black' }}
			isOpen={playerDetailsModalIsOpen}
			size="lg">
			<ModalHeader>{`Player Details - ${player.name}`}</ModalHeader>
			<ModalBody>
				<ListGroup>
					<ListGroupItem>
						<Styled.Headings>Skill Level:</Styled.Headings>
						<Styled.Details>{player.skillLevel}</Styled.Details>
					</ListGroupItem>
					<ListGroupItem>
						<Styled.Headings>Name:</Styled.Headings>
						<Styled.Details>{player.name}</Styled.Details>
					</ListGroupItem>
					<ListGroupItem>
						<Styled.Headings>Game Types:</Styled.Headings>
						<Styled.Details>{findGameTypes(player)}</Styled.Details>
					</ListGroupItem>
					<ListGroupItem>
						<Styled.Headings>Notes:</Styled.Headings>
						<Styled.Details>{player.notes}</Styled.Details>
					</ListGroupItem>
				</ListGroup>
			</ModalBody>
			<ModalFooter>
				<Button
					color="primary"
					onClick={() => setPlayerDetailsModalIsOpen(false)}>
					Done
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default PlayerDetails

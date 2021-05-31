import * as React from 'react'
import * as Styled from './add-players.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Button,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from 'reactstrap'
import AddedPlayersList from '../added-players-list'
import { Player } from '../../interfaces/player'
import { addPlayersPost } from '../util/player-methods'

interface AddPlayersProps {
	setShowAddPlayers: (showAddPlayers: boolean) => void
	setUserUpdatedPlayers: (userUpdatedPlayers: boolean) => void
	showAddPlayers: boolean
}

const AddPlayers: React.FC<AddPlayersProps> = ({
	setShowAddPlayers,
	showAddPlayers,
	setUserUpdatedPlayers
}) => {
	const [playersToBeAdded, setPlayersToBeAdded] = React.useState<Array<Player>>()
	const [currentInput, setCurrentInput] = React.useState('')
	const inputRef = React.useRef(null)

	const addPlayersToDatabase = async (players?: Player[]): Promise<void> => {
		if (!players) return
		const { success, error } = await addPlayersPost(players)

		if (success) {
			setUserUpdatedPlayers(true)
			setShowAddPlayers(false)
		} else {
			// TODO: add a real error message / notification
			alert('Uh-Oh player wasn`t added correctly')
			console.log('error: ', error)
		}
	}

	return (
		<Styled.AddPlayersWrapper>
			<Modal style={{ color: 'black' }} size="lg" isOpen={showAddPlayers}>
				<ModalHeader toggle={() => setShowAddPlayers(false)}>
					Add Players
				</ModalHeader>
				<ModalBody>
					<Form
						onSubmit={(e) => {
							e.preventDefault()
							if (playersToBeAdded && playersToBeAdded.length > 0) {
								const addedPlayers = playersToBeAdded.concat({ name: currentInput })
								setPlayersToBeAdded(addedPlayers)
							} else setPlayersToBeAdded([{ name: currentInput }])
							setCurrentInput('')
						}}>
						<InputGroup>
							<Input
								type="text"
								id="playerName"
								name="playerName"
								placeholder="Player Name"
								value={currentInput}
								onChange={(e) => {
									setCurrentInput(e.target.value)
								}}
								ref={inputRef}
							/>
							<InputGroupAddon addonType="append">
								<Button>
									<FontAwesomeIcon
										style={{ cursor: 'pointer' }}
										color="black"
										icon={faPlus}
									/>
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</Form>
					<AddedPlayersList
						playersList={playersToBeAdded}
						removePlayer={(playerName) => {
							const updatedList = playersToBeAdded?.filter(
								(p) => p.name !== playerName
							)
							setPlayersToBeAdded(updatedList)
						}}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						color="secondary"
						onClick={() => {
							setPlayersToBeAdded([])
							setShowAddPlayers(false)
						}}>
						Cancel
					</Button>
					<Button
						color="primary"
						onClick={async () => {
							await addPlayersToDatabase(playersToBeAdded)
						}}>
						Save Players
					</Button>
				</ModalFooter>
			</Modal>
		</Styled.AddPlayersWrapper>
	)
}

export default AddPlayers

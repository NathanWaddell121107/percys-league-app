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
import addPlayersPost from '../../api-calls/add-players'
import playerDelete from '../../api-calls/delete-player'
import fetchPlayers from '../../api-calls/get-players'
import AddedPlayersList from '../added-players-list'

export interface MatchedPlayers {
	player1: string | undefined
	player2: string | undefined
	setId: number
}

export interface Player {
	name: string
	_id?: string
}

interface AddPlayersProps {
	setShowAddPlayers: (showAddPlayers: boolean) => void
	showAddPlayers: boolean
}

const AddPlayers: React.FC<AddPlayersProps> = ({
	setShowAddPlayers,
	showAddPlayers
}) => {
	const [playersList, setPlayersList] = React.useState<Array<Player>>()
	const [playersToBeAdded, setPlayersToBeAdded] = React.useState<Array<Player>>()
	const [userUpdatedPlayers, setUserUpdatedPlayers] = React.useState(false)
	const [currentInput, setCurrentInput] = React.useState('')
	const [matchedPlayers, setMatchedPlayers] = React.useState<
		Array<MatchedPlayers>
	>([])
	const inputRef = React.useRef(null)

	React.useEffect(() => {
		const getPlayers = async () => {
			const apiPlayersNames = await fetchPlayers()
			console.log('apiPlayersNames: ', apiPlayersNames)
			setPlayersList(apiPlayersNames.data)
			setUserUpdatedPlayers(false)
		}
		getPlayers()
	}, [userUpdatedPlayers])

	// const shufflePlayersList = () => {
	// 	setMatchedPlayers(randomPlayerPairings(addedPlayers))
	// }

	const addPlayersToDatabase = async (
		players?: Player[]
	): Promise<{
		success?: boolean | undefined
		error?: string | undefined
	} | null> => {
		if (!players) return null
		// const playersDatabaseList = players.map((player) => player.name)
		const { success, error } = await addPlayersPost(players)

		if (success) {
			setUserUpdatedPlayers(true)
			return { success }
		} else {
			alert('Uh-Oh player wasn`t added correctly')
			console.log('error: ', error)
			return { error }
		}
	}

	const removePlayerFromTempList = (player: string) => {
		const filteredPlayers = playersToBeAdded?.filter((p) => p.name !== player)
		setPlayersToBeAdded(filteredPlayers)
	}

	const removePlayer = async (playerId: string) => {
		const { success, error } = await playerDelete(playerId)

		if (success) {
			setUserUpdatedPlayers(true)
		} else {
			alert('Uh-Oh player wasn`t deleted correctly')
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
								console.log('playersToBeAdded: ', playersToBeAdded)
								const addedPlayers = playersToBeAdded.concat({ name: currentInput })
								console.log('addedPlayers: ', addedPlayers)
								setPlayersToBeAdded(addedPlayers)
							} else {
								setPlayersToBeAdded([{ name: currentInput }])
							}
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
							const result = await addPlayersToDatabase(playersToBeAdded)
							if (result?.success) {
								setShowAddPlayers(false)
							}
							if (result?.error) {
								alert('uhoh')
							}
						}}>
						Save Players
					</Button>
				</ModalFooter>
			</Modal>
		</Styled.AddPlayersWrapper>
	)
}

export default AddPlayers

import * as React from 'react'
import * as Styled from './main-page.styles'
import randomPlayerPairings from '../util/random-player-pairings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Form } from 'reactstrap'
import {
	faPlus,
	faTimes,
	faSync,
	faTrash
} from '@fortawesome/free-solid-svg-icons'

/*
TODO: 
    To get the app up and running quickly, I am using localStorage for saving the state on refreshes
    Needs to be updated to connect to a DB to store a playerList lineup that can be re-used / adjusted from week to week
*/

interface MatchedPlayers {
	player1: string | undefined
	player2: string | undefined
	setId: number
}

const MainPage: React.FC = () => {
	const [addedPlayers, setAddedPlayers] = React.useState<Array<string>>([])
	const [currentInput, setCurrentInput] = React.useState('')
	const [matchedPlayers, setMatchedPlayers] = React.useState<
		Array<MatchedPlayers>
	>([])
	const inputRef = React.useRef(null)
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			const existingAddedPlayers = localStorage.getItem('addedPlayers')?.split(',')
			if (existingAddedPlayers) {
				setAddedPlayers(existingAddedPlayers)
			}
		}
	}, [])

	const shufflePlayersList = () => {
		setMatchedPlayers(randomPlayerPairings(addedPlayers))
	}

	const addPlayersToStorage = (players: string[]) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('addedPlayers', `${players}`)
		}
		setAddedPlayers(players)
	}

	const removePlayer = (player: string) => {
		if (!player) return

		setAddedPlayers(
			addedPlayers.filter((p) => {
				if (p === player) return false
				return true
			})
		)
		if (typeof window !== 'undefined') {
			localStorage.setItem('addedPlayers', `${addedPlayers}`)
		}
	}

	const removeAllPlayers = () => {
		setAddedPlayers([])
		if (typeof window !== 'undefined') {
			localStorage.removeItem('addedPlayers')
		}
	}

	return (
		<Styled.MainPageWrapper>
			<Form
				onSubmit={(e) => {
					e.preventDefault()
					const playersToBeUpdated = addedPlayers.concat(currentInput)
					addPlayersToStorage(playersToBeUpdated)
					setCurrentInput('')
				}}>
				<Styled.InputContainer>
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
					<div
						onClick={() => {
							const playersToBeUpdated = addedPlayers.concat(currentInput)
							addPlayersToStorage(playersToBeUpdated)
							setCurrentInput('')
						}}>
						<FontAwesomeIcon color="black" icon={faPlus} />
					</div>
				</Styled.InputContainer>
			</Form>
			<Styled.AddedPlayersList>
				{addedPlayers.map((player, index) => {
					if (player === 'Bye') return null
					return (
						<Styled.AddedPlayer key={index}>
							<Styled.PlayerName>{player}</Styled.PlayerName>
							<FontAwesomeIcon
								onClick={() => removePlayer(player)}
								icon={faTimes}
								color="red"
								size="sm"
							/>
						</Styled.AddedPlayer>
					)
				})}
			</Styled.AddedPlayersList>
			<Styled.MatchedPlayersList>
				{matchedPlayers.map((match) => {
					return (
						<Styled.MatchedPlayer key={match.setId}>
							<span>{match.setId}</span>
							<Styled.MatchedPlayerName>{match.player1}</Styled.MatchedPlayerName>
							<Styled.MatchedPlayerName versus>vs</Styled.MatchedPlayerName>
							<Styled.MatchedPlayerName>{match.player2}</Styled.MatchedPlayerName>
						</Styled.MatchedPlayer>
					)
				})}
			</Styled.MatchedPlayersList>
			{addedPlayers.length > 0 && (
				<div style={{ marginTop: '40px' }}>
					<FontAwesomeIcon
						style={{ fontSize: '24px', marginRight: '40px', cursor: 'pointer' }}
						color="white"
						icon={faTrash}
						onClick={() => {
							removeAllPlayers()
						}}
					/>
					<FontAwesomeIcon
						style={{ fontSize: '24px', cursor: 'pointer' }}
						onClick={() => shufflePlayersList()}
						icon={faSync}
					/>
				</div>
			)}
		</Styled.MainPageWrapper>
	)
}

export default MainPage

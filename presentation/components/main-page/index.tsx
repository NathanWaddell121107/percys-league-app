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
import axios from 'axios'
import fetchPlayers from '../../api-calls/get-players'
import addPlayerPost from '../../api-calls/add-player'
import playerDelete from '../../api-calls/delete-player'

/*
TODO: 
    To get the app up and running quickly, I am using localStorage for saving the state on refreshes
    Needs to be updated to connect to a DB to store a playerList lineup that can be re-used / adjusted from week to week
*/

/*
TODO:
    Need to add the ability to mark a players skill level this will allow for quick reference as well as being able to calculate
    the correct races between the two players dynamically

    Not a massive priority until the database is created
*/

interface MatchedPlayers {
    player1: string | undefined
    player2: string | undefined
    setId: number
}

interface Player {
    name: string;
    _id: string;
}

const MainPage: React.FC = () => {
    const [playersList, setPlayersList] = React.useState<Array<Player>>()
    const [userUpdatedPlayers, setUserUpdatedPlayers] = React.useState(false)
    const [currentInput, setCurrentInput] = React.useState('')
    const [matchedPlayers, setMatchedPlayers] = React.useState<
        Array<MatchedPlayers>
    >([])
    const inputRef = React.useRef(null)
    // React.useEffect(() => {
    // 	if (typeof window !== 'undefined') {
    // 		const existingAddedPlayers = localStorage.getItem('addedPlayers')?.split(',')
    // 		if (existingAddedPlayers) {
    // 			setAddedPlayer(existingAddedPlayers)
    // 		}
    // 	}
    // }, [])

    React.useEffect(() => {
        const getPlayers = async () => {
            const apiPlayersNames = await fetchPlayers()
            console.log('apiPlayersNames: ', apiPlayersNames)
            setPlayersList(apiPlayersNames.data);
            setUserUpdatedPlayers(false)
        }
        getPlayers()
    }, [userUpdatedPlayers])

    // const shufflePlayersList = () => {
    // 	setMatchedPlayers(randomPlayerPairings(addedPlayers))
    // }

    const addPlayerToDatabase = async (player: string) => {
        const { success, error } = await addPlayerPost(player)

        if (success) {
            setUserUpdatedPlayers(true)
        } else {
            alert('Uh-Oh player wasn`t added correctly')
            console.log('error: ', error)
        }
    }

    const removePlayer = async (playerId: string) => {
        if (!playerId) return
        const { success, error } = await playerDelete(playerId);

        if (success) {
            setUserUpdatedPlayers(true)
        } else {
            alert('Uh-Oh player wasn`t deleted correctly');
            console.log('error: ', error);
        }
    }

    // const removeAllPlayers = () => {
    // 	setAddedPlayers([])
    // 	if (typeof window !== 'undefined') {
    // 		localStorage.removeItem('addedPlayers')
    // 	}
    // }

    return (
        <Styled.MainPageWrapper>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    // const playersToBeUpdated = addedPlayers.concat(currentInput)
                    addPlayerToDatabase(currentInput)
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
                            // const playersToBeUpdated = addedPlayers.concat(currentInput)
                            addPlayerToDatabase(currentInput)
                            setCurrentInput('')
                        }}>
                        <FontAwesomeIcon color="black" icon={faPlus} />
                    </div>
                </Styled.InputContainer>
            </Form>
            <Styled.AddedPlayersList>
                {playersList && playersList.map((player, index) => {
                    // if (player === 'Bye') return null
                    return (
                        <Styled.AddedPlayer key={index}>
                            <Styled.PlayerName>{player.name}</Styled.PlayerName>
                            <FontAwesomeIcon
                                onClick={() => removePlayer(player._id)}
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
            {/* {addedPlayers.length > 0 && (
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
			)} */}
        </Styled.MainPageWrapper>
    )
}

export default MainPage

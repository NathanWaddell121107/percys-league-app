import * as React from 'react'
import * as Styled from './main-page.styles'
import randomPlayerPairings from '../util/random-player-pairings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label, Input, FormGroup, Form } from 'reactstrap'
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const MainPage: React.FC = () => {
    const [addedPlayers, setAddedPlayers] = React.useState<Array<string>>([]);
    const [currentInput, setCurrentInput] = React.useState('');
    const inputRef = React.useRef(null);
    const matchedPlayers = randomPlayerPairings(addedPlayers)

    React.useEffect(() => {
        console.log('addedPlayers: ', addedPlayers);
    }, [addedPlayers]);

    const removePlayer = (player: string) => {
        if (!player) return

        setAddedPlayers(addedPlayers.filter((p) => {
            if (p === player) return false
            return true
        }))
    }

    return (
        <Styled.MainPageWrapper>
            <Styled.InputContainer>
                <Input
                    type="text"
                    id="playerName"
                    name="playerName"
                    placeholder="Player Name"
                    value={currentInput}
                    onChange={(e) => { setCurrentInput(e.target.value) }}
                    ref={inputRef}
                />
                <div onClick={() => {
                    const playersToBeUpdated = addedPlayers.concat(currentInput);
                    setAddedPlayers(playersToBeUpdated)
                    setCurrentInput('')
                    console.log('playersToBeUpdated: ', playersToBeUpdated);
                    console.log('currentInput: ', currentInput);
                    console.log('playersList: ', addedPlayers);
                }}><FontAwesomeIcon color="black" icon={faPlus} /></div>
            </Styled.InputContainer>
            <div
                style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    width: '70%',
                    flexWrap: 'wrap',
                }}>
                {addedPlayers.map((player, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                color: '#000',
                                borderRight: '1px solid black',
                                borderBottom: '1px solid black',
                                padding: '2px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                            <span style={{ width: '40%', textAlign: 'center' }}>
                                {player}
                            </span>
                            <FontAwesomeIcon onClick={() => removePlayer(player)} icon={faTimes} color="red" size="sm" />
                        </div>
                    )
                })}
            </div>
            <div style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
                {matchedPlayers.map((match) => {
                    return (
                        <div key={match.setId} style={{ color: '#000', borderTop: '1px solid black', borderBottom: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'space-around', width: '30vw' }}>
                            <span style={{ width: '40%', textAlign: 'center' }}>
                                {match.player1}
                            </span>
                            <span style={{ width: '20%', textAlign: 'center' }}>
                                vs
                            </span>
                            <span style={{ width: '40%', textAlign: 'center' }}>{match.player2}</span>
                        </div>
                    )
                })}</div>
        </Styled.MainPageWrapper>

    )
}

export default MainPage

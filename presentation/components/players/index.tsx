import * as React from 'react'
import { Button } from 'reactstrap'
import AddPlayers from '../add-players'
import * as Styled from './players.styles'

const Players: React.FC = () => {
    const [showAddPlayers, setShowAddPlayers] = React.useState(false)
    return (
        <Styled.PlayersWrapper>
            <Button onClick={() => setShowAddPlayers(true)}>Add Players</Button>
            {showAddPlayers && <AddPlayers setShowAddPlayers={setShowAddPlayers} showAddPlayers={showAddPlayers} />}
        </Styled.PlayersWrapper>
    )
}

export default Players

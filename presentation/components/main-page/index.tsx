import * as React from 'react'
import * as Styled from './main-page.styles'
import fetchPlayers from '../../api-calls/get-players'
import { Player } from '../add-players'
import AddedPlayersList from '../added-players-list'

/*
TODO:
    Need to add the ability to mark a players skill level this will allow for quick reference as well as being able to calculate
    the correct races between the two players dynamically

    Not a massive priority until the database is created
*/

const MainPage: React.FC = () => {
	const [playersList, setPlayersList] = React.useState<Array<Player>>()

	React.useEffect(() => {
		const getPlayers = async () => {
			const apiPlayersNames = await fetchPlayers()
			console.log('apiPlayersNames: ', apiPlayersNames)
			setPlayersList(apiPlayersNames.data)
		}
		getPlayers()
	}, [])

	return (
		<Styled.MainPageWrapper>
			{/* <AddedPlayersList playersList={playersList} /> */}
			{/* <Styled.MatchedPlayersList>
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
            </Styled.MatchedPlayersList> */}
		</Styled.MainPageWrapper>
	)
}

export default MainPage

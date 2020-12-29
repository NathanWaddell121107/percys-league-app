import * as React from 'react';
import randomPlayerPairings from '../util/random-player-pairings';
import * as Styled from './main-page.styles';

const MainPage: React.FC = () => {
    const matchedPlayers = randomPlayerPairings();
    return (
        <Styled.MainPageWrapper>
            <div>
                <input placeholder="Player Name" />
            </div>
            <div style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
                {matchedPlayers.map((match) => {
                    return (
                        <div key={match.setId} style={{ color: '#000', borderTop: '1px solid black', borderBottom: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'space-around', width: '30vw' }}>
                            <span style={{ width: '40%', textAlign: 'center' }}>{match.player1}</span><span style={{ width: '20%', textAlign: 'center' }}>vs</span><span style={{ width: '40%', textAlign: 'center' }}>{match.player2}</span>
                        </div>
                    )
                })}
            </div>
        </Styled.MainPageWrapper>
    )
}

export default MainPage;

import styled from 'styled-components'

export const MainPageWrapper = styled.div`
	margin: 0 auto;
	margin-top: 10rem;
	max-width: 1200px;
	width: 88%;
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const MatchedPlayerName = styled.span<{ versus?: boolean }>`
	text-align: center;
	flex: 1;
`

export const MatchedPlayersList = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 100%;
	}
`

export const MatchedPlayer = styled.div`
	color: #000;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	min-width: 30vw;
`

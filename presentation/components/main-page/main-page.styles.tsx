import styled from 'styled-components'

export const MainPageWrapper = styled.div`
	margin: 0 auto;
	margin-top: 5rem;
	max-width: 1200px;
	width: 88%;
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	> form {
		width: 70%;
		display: flex;
		justify-content: center;
		@media (max-width: 768px) {
			width: 100%;
		}
	}
`

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	align-items: center;
	margin: 20px 0;
	@media (max-width: 768px) {
		width: 100%;
	}
	> input {
		width: 45%;
		margin-right: 20px;
	}
	> div {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5%;
		height: 80%;
		border-radius: 4px;
		cursor: pointer;
		@media (max-width: 768px) {
			width: 10%;
		}
	}
`

export const AddedPlayersList = styled.div`
	background-color: #fff;
	display: flex;
	width: 50%;
	flex-wrap: wrap;
	margin-bottom: 40px;
	@media (max-width: 768px) {
		width: 100%;
	}
`

export const AddedPlayer = styled.div`
	color: #000;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-right: 20px;
	> svg {
		cursor: pointer;
	}
	@media (max-width: 768px) {
		justify-content: start;
	}
`

export const PlayerName = styled.span`
	padding-right: 20px;
	text-align: center;
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

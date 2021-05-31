import styled from 'styled-components'

export const AddPlayersWrapper = styled.div`
	margin: 0 auto;
	margin-top: 1rem;
	max-width: 1200px;
	width: 88%;
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
		width: 8%;
		height: 80%;
		border-radius: 4px;
		cursor: pointer;
		@media (max-width: 768px) {
			width: 10%;
		}
	}
`

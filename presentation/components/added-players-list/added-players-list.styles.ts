import styled from 'styled-components'

export const AddedPlayer = styled.div`
	color: #000;
	padding: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	width: calc(100% * 1 / 3);
	> svg {
		cursor: pointer;
	}
	@media (max-width: 500px) {
		width: 50%;
	}
`

export const PlayerName = styled.span`
	padding-right: 20px;
	text-align: center;
`

export const GroupItem = styled.div`
	display: flex;
	justify-content: space-between;
`

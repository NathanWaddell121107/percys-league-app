import { ListGroup, ListGroupItem } from 'reactstrap'
import styled from 'styled-components'

export const Explanation = styled.h6`
	text-align: center;
	width: 80%;
	margin: 1rem auto;
	font-size: 14px;
`

export const PlayersContainer = styled(ListGroup)`
	max-height: 400px;
	overflow-y: auto;
`

export const ListPlayer = styled(ListGroupItem)`
	cursor: pointer;
	display: flex !important;
	justify-content: space-between;
`

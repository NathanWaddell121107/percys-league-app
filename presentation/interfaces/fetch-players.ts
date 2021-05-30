import { Player } from './player'

export interface FetchPlayers {
	players?: Player[]
	success?: boolean
	error?: any
}

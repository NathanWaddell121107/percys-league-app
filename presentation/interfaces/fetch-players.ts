import { Player } from './player'

export interface FetchPlayers {
	players?: Player[]
	success?: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error?: any
}

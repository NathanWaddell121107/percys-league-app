import { DateObject } from './date-object'
import { Player } from './player'

export interface SelectedPlayers {
	_id?: string
	date?: DateObject
	selectedPlayers?: Player[]
}

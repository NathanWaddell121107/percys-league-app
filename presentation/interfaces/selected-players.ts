import { Player } from "./player";

export interface SelectedPlayers {
	_id?: string
  date?: {month: number, day: number, year: number}
  selectedPlayers?: Player[]
}

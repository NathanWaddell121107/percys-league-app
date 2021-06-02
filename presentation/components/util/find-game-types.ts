import { Player } from '../../interfaces/player'

export default function findGameTypes(player: Player): string {
	if (player.eightBall && player.nineBall) return '8-ball & 9-ball'
	if (player.eightBall && !player.nineBall) return '8-ball'
	if (!player.eightBall && player.nineBall) return '9-ball'
	return '-'
}

import axios from 'axios'

export default async function playerDelete(
	playerId: string
): Promise<{ success: boolean; error?: string }> {
	try {
		const result = await axios.post(
			`${window.location.origin}/api/delete-player`,
			{
				playerId
			}
		)
		if (result.data.value._id) {
			return { success: true }
		} else {
			return { success: false }
		}
	} catch (err) {
		console.log('error deleting the player: ', err)
		return { success: false, error: err }
	}
}

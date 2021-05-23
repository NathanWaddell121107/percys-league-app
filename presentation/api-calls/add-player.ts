import axios from 'axios'

export default async function addPlayerPost(
	playerName: string
): Promise<{ success: boolean; error?: string }> {
	try {
		const result = await axios.post(`${window.location.origin}/api/add-player`, {
			playerName
		})
		if (result.data.insertedId) {
			return { success: true }
		} else {
			return { success: false }
		}
	} catch (err) {
		console.log('error adding a player: ', err)
		return { success: false, error: err }
	}
}

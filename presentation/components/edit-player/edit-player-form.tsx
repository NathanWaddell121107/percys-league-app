import * as React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { Player } from '../../interfaces/player'

interface EditPlayerFormProps {
	editPlayer: Player
	setEditPlayer: (editPlayer: Player) => void
}

const EditPlayerForm: React.FC<EditPlayerFormProps> = ({
	editPlayer,
	setEditPlayer
}) => {
	return (
		<Form>
			<FormGroup>
				<Label for="name">Name</Label>
				<Input
					type="text"
					id="name"
					defaultValue={editPlayer.name}
					onChange={(e) => {
						const changed = { ...editPlayer, name: e.target.value }
						setEditPlayer(changed)
					}}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="skillLevel">Skill Level</Label>
				<Input
					type="number"
					id="skillLevel"
					defaultValue={editPlayer.skillLevel}
					placeholder="1-9"
					onChange={(e) => {
						const changed = { ...editPlayer, skillLevel: e.target.value }
						setEditPlayer(changed)
					}}
				/>
			</FormGroup>
			<FormGroup style={{ marginLeft: '5%' }}>
				<Label check>
					<Input
						type="checkbox"
						checked={editPlayer.eightBall}
						id="eightBall"
						onChange={(e) => {
							const changed = { ...editPlayer, eightBall: e.target.checked ?? false }
							setEditPlayer(changed)
						}}
					/>
					8-Ball
				</Label>
			</FormGroup>
			<FormGroup style={{ marginLeft: '5%' }}>
				<Label check>
					<Input
						type="checkbox"
						checked={editPlayer.nineBall}
						id="nineBall"
						onChange={(e) => {
							const changed = { ...editPlayer, nineBall: e.target.checked ?? false }
							setEditPlayer(changed)
						}}
					/>
					9-Ball
				</Label>
			</FormGroup>
			<FormGroup>
				<Label for="notes">Notes</Label>
				<Input
					type="textarea"
					placeholder="Week #1 dues paid on 5/31/21, etc..."
					id="notes"
					name="notes"
					defaultValue={editPlayer.notes}
					onChange={(e) => {
						const changed = { ...editPlayer, notes: e.target.value }
						setEditPlayer(changed)
					}}
				/>
			</FormGroup>
		</Form>
	)
}

export default EditPlayerForm

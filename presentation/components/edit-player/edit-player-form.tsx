import * as React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { Player } from '../../interfaces/player'

interface EditPlayerFormProps {
	player: Player
	onSubmit: () => void
}

const EditPlayerForm: React.FC<EditPlayerFormProps> = ({
	player,
	onSubmit
}) => {
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit()
			}}>
			<FormGroup>
				<Label for="name">Name</Label>
				<Input
					type="text"
					id="name"
					value={player.name ?? undefined}
					onChange={(e) => {}}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="skillLevel">Skill Level</Label>
				<Input
					type="number"
					id="skillLevel"
					value={player.skillLevel ?? undefined}
					placeholder="1-9"
					onChange={(e) => {}}
				/>
			</FormGroup>
			<FormGroup style={{ marginLeft: '5%' }}>
				<Label check>
					<Input
						type="checkbox"
						checked={player.eightBall}
						id="eightBall"
						onChange={(e) => {}}
					/>
					8-Ball
				</Label>
			</FormGroup>
			<FormGroup style={{ marginLeft: '5%' }}>
				<Label check>
					<Input
						type="checkbox"
						checked={player.nineBall}
						id="nineBall"
						onChange={(e) => {}}
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
					value={player.notes ?? undefined}
					onChange={(e) => {}}
				/>
			</FormGroup>
		</Form>
	)
}

export default EditPlayerForm

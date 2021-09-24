import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../store/hooks'
import { addNote } from '../../store/notesSlice'
import Button from '@mui/material/Button'
import { Descendant } from 'slate'

interface textAreaProps {}

const CreateElement: React.FC<textAreaProps> = () => {
	const emptyValue: Descendant[] = [
		{
			type: 'paragraph',
			children: [{ text: '' }],
		},
	]
	const dispatch = useAppDispatch()

	const handleSubmit = () => {
		const note = { id: uuidv4(), content: emptyValue }
		dispatch(addNote(note))
	}
	return (
		<div className="text-area">
			<Button variant="outlined" onClick={handleSubmit}>
				Add
			</Button>
		</div>
	)
}

export default CreateElement

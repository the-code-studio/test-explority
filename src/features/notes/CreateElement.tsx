import React, { useState, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { addNote } from './notesSlice'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface textAreaProps {}

const CreateElement: React.FC<textAreaProps> = () => {
	const initialValue: Descendant[] = [
		{
			type: 'paragraph',
			children: [{ text: 'A line of text in a paragraph.' }],
		},
	]
	const emptyValue: Descendant[] = [
		{
			type: 'paragraph',
			children: [{ text: '' }],
		},
	]
	const editor = useMemo(() => withHistory(withReact(createEditor())), [])
	const [value, setValue] = useState<Descendant[]>(initialValue)
	const dispatch = useAppDispatch()

	const handleSubmit = () => {
		const note = { id: uuidv4(), content: value }
		dispatch(addNote(note))
		setValue(emptyValue)
	}
	return (
		<div className="text-area">
			<Box
				sx={{
					width: '50%',
					height: '100%',
					overflow: 'auto',
					padding: '1em',
					boxShadow: '0px 2px 9px -2px rgba(83, 87, 97, 0.2)',
					borderRadius: ' 12px',
				}}
			>
				<Slate editor={editor} value={value} onChange={setValue}>
					<Editable placeholder="Enter some plain text..." />
				</Slate>
			</Box>
			<Button variant="outlined" onClick={handleSubmit}>
				Add
			</Button>
		</div>
	)
}

export default CreateElement

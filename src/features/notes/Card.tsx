import React, { useState, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { editeNote } from '../../store/notesSlice'
import { useAppDispatch } from '../../store/hooks'

interface noteProps {
	id: string
	paragraphes: Descendant[]
}

const Card: React.FC<noteProps> = ({ id, paragraphes }) => {
	const handleDragStart = (e: {
		target: any
		dataTransfer: { setData: (arg0: string, arg1: any) => void }
	}) => {
		const target = e.target
		e.dataTransfer.setData('note_id', target.id)
		e.target.classList.add('dragging')
	}
	const handleDragEnd = (e: any) => {
		e.target.classList.remove('dragging')
	}
	const handleDragOver = (e: { stopPropagation: () => void }) => {
		e.stopPropagation()
	}
	const dispatch = useAppDispatch()
	const editor = useMemo(() => withHistory(withReact(createEditor())), [])
	const [value, setValue] = useState<Descendant[]>(paragraphes)
	const handleEdite = () => {
		const note = { id: id, content: value }
		dispatch(editeNote(note))
	}
	return (
		<div
			className="note"
			key={id}
			id={id}
			draggable="true"
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
			onMouseLeave={handleEdite}
		>
			<div>
				<Slate editor={editor} value={value} onChange={setValue}>
					<Editable placeholder="Enter text..." />
				</Slate>
			</div>
		</div>
	)
}

export default Card

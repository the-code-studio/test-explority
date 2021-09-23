import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'

interface columnProps {
	id: string
	children?: ReactNode
}
const drop = (e: any) => {
	e.preventDefault()
	const noteId = e.dataTransfer.getData('note_id')
	const note = document.getElementById(noteId)
	if (note) {
		note.style.display = 'block'
	}
	console.log(typeof note)
	e.target.appendChild(note)
}
const dragOver = (e: any) => {
	e.preventDefault()
}

const Column: React.FC<columnProps> = ({ id, children }) => {
	return (
		<div className="column" id={id} onDrop={drop} onDragOver={dragOver}>
			{children}
		</div>
	)
}

export default Column

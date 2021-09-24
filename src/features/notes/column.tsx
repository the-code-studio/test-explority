import React from 'react'

interface columnProps {
	id: string
	children?: React.ReactNode
}

const handleDrop = (e: any) => {
	e.preventDefault()
	const noteId = e.dataTransfer.getData('note_id')
	const note = document.getElementById(noteId)
	if (note) {
		note.style.display = 'block'
	}
	e.target.appendChild(note)
}
const handleDragOver = (e: any) => {
	e.preventDefault()
}

const Column: React.FC<columnProps> = ({ id, children }) => {
	return (
		<div
			className="column"
			id={id}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			{children}
		</div>
	)
}

export default Column

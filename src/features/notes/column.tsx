import React from 'react'

interface columnProps {
	id: string
	children?: React.ReactNode
}

const Column: React.FC<columnProps> = ({ id, children }) => {
	const handleDragOver = (e: any) => {
		e.preventDefault()
	}

	const handleDrop = (e: any) => {
		e.preventDefault()
		const noteId = e.dataTransfer.getData('note_id')
		const note = document.getElementById(noteId)
		const afterElement = getDragAfterElement(e.target, e.clientY)
		if (afterElement == null) {
			e.target.appendChild(note)
		} else {
			e.target.insertBefore(note, afterElement)
		}
	}

	const getDragAfterElement = (container: any, y: number) => {
		const draggableElements = [
			...container.querySelectorAll('.note:not(.dragging)'),
		]

		return draggableElements.reduce(
			(closest, child) => {
				const box = child.getBoundingClientRect()
				const offset = y - box.top - box.height / 2
				if (offset < 0 && offset > closest.offset) {
					return { offset: offset, element: child }
				} else {
					return closest
				}
			},
			{ offset: Number.NEGATIVE_INFINITY }
		).element
	}

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

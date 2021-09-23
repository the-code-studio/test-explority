import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import Card from '@mui/material/Card'

interface noteProps {
	id: string
	paragraphes: ReactNode[]
}

const Note: React.FC<noteProps> = ({ id, paragraphes }) => {
	const dragStart = (e: {
		target: any
		dataTransfer: { setData: (arg0: string, arg1: any) => void }
	}) => {
		const target = e.target
		e.dataTransfer.setData('note_id', target.id)
	}
	const dragOver = (e: { stopPropagation: () => void }) => {
		e.stopPropagation()
	}
	return (
		<Card
			className="note"
			key={id}
			id={id}
			draggable="true"
			onDragStart={dragStart}
			onDragOver={dragOver}
		>
			{paragraphes.map((item: ReactNode) => item)}
		</Card>
	)
}

export default Note

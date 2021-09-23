import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Column from './column'
import Note from './noteCard'
import { selectNotes, note } from './notesSlice'

interface ShowNotesProps {}

const ShowNotes: React.FC<ShowNotesProps> = () => {
	const notes = useAppSelector(selectNotes)
	return (
		<div className="notes-container">
			<Column id="column1">
				{notes.map(({ id, content }: note) => {
					const paragraphes = content.map((item: any, ind: number) => (
						<p key={ind}>{item.children[0].text}</p>
					))

					return <Note key={id} id={id} paragraphes={paragraphes} />
				})}
			</Column>
			<Column id="column2" />
			<Column id="column3" />
			<Column id="column4" />
		</div>
	)
}

export default ShowNotes

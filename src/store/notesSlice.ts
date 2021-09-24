import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Descendant } from 'slate'

export type note = {
	id: string
	content: Descendant[]
}

export interface NotesState {
	notes: note[]
}

const initialState: NotesState = {
	notes: [
		{
			id: 'first_note',
			content: [
				{
					type: 'paragraph',
					children: [{ text: 'A First note is alerady writing.' }],
				},
			],
		},
	],
}
export const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<note>) => {
			state.notes.push(action.payload)
		},
		editeNote: (state, action: PayloadAction<note>) => {
			const noteToEdite = state.notes.find(
				(item: any) => item.id === action.payload.id
			)
			if (noteToEdite) {
				noteToEdite.content = action.payload.content
			}
		},
	},
})
export const { addNote, editeNote } = notesSlice.actions
export const selectNotes = (state: RootState) => state.notes.notes
export default notesSlice.reducer

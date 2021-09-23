import React from 'react'
import './App.css'
import CreateNote from './features/notes/createNote'
import ShowNotes from './features/notes/showNotes'

function App() {
	return (
		<div className="app-container">
			<CreateNote />
			<ShowNotes />
		</div>
	)
}

export default App

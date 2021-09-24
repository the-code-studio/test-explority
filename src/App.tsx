import React from 'react'
import './App.css'
import CreateNote from './features/notes/CreateElement'
import CardsContainer from './features/notes/CardsContainer'

function App() {
	return (
		<div className="app-container">
			<CreateNote />
			<CardsContainer />
		</div>
	)
}

export default App

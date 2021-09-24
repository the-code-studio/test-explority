import React from 'react'
import './App.css'
import CreateElement from './features/notes/CreateElement'
import CardsContainer from './features/notes/CardsContainer'

function App() {
	return (
		<div className="app-container">
			<CreateElement />
			<CardsContainer />
		</div>
	)
}

export default App

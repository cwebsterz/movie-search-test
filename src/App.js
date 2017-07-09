import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Show from './pages/show'
import Search from './pages/search'
import Form from './pages/form'
import Edit from './pages/edit-rank'

const App = function(props) {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/show/:id" component={Show} />
				<Route path="/search" component={Search} />
				<Route path="/new" component={Form} />
				<Route path="/edit" component={Edit} />
			</div>
		</BrowserRouter>
	)
}

export default App

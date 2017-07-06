import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import favorites from './reducers/favorites'
import favorite from './reducers/favorite'
import search from './reducers/search'

const store = createStore(
	combineReducers({
		app,
		favorites,
		favorite,
		search
	}),
	applyMiddleware(thunk)
)

export default store

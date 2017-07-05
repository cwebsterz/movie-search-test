import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import favorites from './reducers/favorites'
import favorite from './reducers/favorite'

const store = createStore(
	combineReducers({
		app,
		favorites,
		favorite
	}),
	applyMiddleware(thunk)
)

export default store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import favorites from './reducers/favorites'
import favorite from './reducers/favorite'
import search from './reducers/search'
import { SET_FAVORITES } from './constants'

const store = createStore(
	combineReducers({
		app,
		favorites,
		favorite,
		search
	}),
	applyMiddleware(thunk)
)

function listAlbums(dispatch, getState) {
	const url = process.env.REACT_APP_API

	fetch(url + '/favorites').then(res => res.json()).then(favorites => {
		dispatch({ type: SET_FAVORITES, payload: favorites })
	})
}

store.dispatch(listAlbums)

export default store

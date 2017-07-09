import { SET_FAVORITES, APPEND_FAVE, DELETE_FAVE } from '../constants'
import { append, reject } from 'ramda'

export default (state = [], action) => {
	switch (action.type) {
		case SET_FAVORITES:
			return action.payload
		case APPEND_FAVE:
			return append(action.payload, state)
		case DELETE_FAVE:
			return reject(fave => (fave.id = action.payload.id), state)
		default:
			return state
	}
}

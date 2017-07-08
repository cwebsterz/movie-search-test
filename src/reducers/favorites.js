import { SET_FAVORITES, APPEND_FAVE } from '../constants'
import { append } from 'ramda'

export default (state = [], action) => {
	switch (action.type) {
		case SET_FAVORITES:
			return action.payload
		case APPEND_FAVE:
			return append(action.payload, state)
		default:
			return state
	}
}

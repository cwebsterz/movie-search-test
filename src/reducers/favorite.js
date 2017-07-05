import { SET_FAVE } from '../constants'

export default (state = {}, action) => {
	switch (action.type) {
		case SET_FAVE:
			return action.payload
		default:
			return state
	}
}

import {
	SET_FAVE,
	SET_FAVE_TITLE,
	SET_FAVE_POSTER,
	SET_FAVE_RANK,
	CLEAR_FAVE
} from '../constants'
import { merge } from 'ramda'

export default (state = {}, action) => {
	switch (action.type) {
		case SET_FAVE:
			return action.payload
		case SET_FAVE_TITLE:
			return merge(state, { name: action.payload })
		case SET_FAVE_POSTER:
			return merge(state, { poster: action.payload })
		case SET_FAVE_RANK:
			return merge(state, { rank: action.payload })
		case CLEAR_FAVE:
			return {}
		default:
			return state
	}
}

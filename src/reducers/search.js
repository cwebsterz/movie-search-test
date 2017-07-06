import { SEARCH_TEXT, SEARCH_RESULTS } from '../constants'
import { merge } from 'ramda'

export default (state = { searchAlbum: '', searchResults: [] }, action) => {
	switch (action.type) {
		case SEARCH_TEXT:
			return merge(state, { searchAlbum: action.payload })
		case SEARCH_RESULTS:
			return merge(state, { searchResults: action.payload })
		default:
			return state
	}
}

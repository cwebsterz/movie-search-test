import { SET_FAVORITES, APPEND_FAVE } from '../constants'
import { append } from 'ramda'

export default (
	state = [
		{
			id: '5HSdx1824FepWuf8NbG7B3',
			href: 'https://api.spotify.com/v1/albums/5HSdx1824FepWuf8NbG7B3',
			name: 'Saints & Sinners',
			poster: 'https://i.scdn.co/image/f896b4651bea2a75dc1418a284473c02444c0c1c'
		},
		{
			id: '29sTacnS0qA9xri6YS8xLA',
			href: 'https://api.spotify.com/v1/albums/29sTacnS0qA9xri6YS8xLA',
			name: 'Superunknown (Deluxe Edition)',
			poster: 'https://i.scdn.co/image/a2e6040d4a8b2af2c33fb608bccd1c2790caed94'
		},
		{
			id: '2BtE7qm1qzM80p9vLSiXkj',
			href: 'https://api.spotify.com/v1/albums/2BtE7qm1qzM80p9vLSiXkj',
			name: 'Magical Mystery Tour (Remastered)',
			poster: 'https://i.scdn.co/image/44a8e349f4d580ce4ea15ff8b60a37b2c7595c4b'
		}
	],
	action
) => {
	switch (action.type) {
		case SET_FAVORITES:
			return action.payload
		case APPEND_FAVE:
			return append(action.payload, state)
		default:
			return state
	}
}

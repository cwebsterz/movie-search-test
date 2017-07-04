import { SET_APP_TITLE } from '../constants'
import { merge } from 'ramda'

export default (state = { title: 'Favorite Music' }, action) => {
  switch (action.type) {
    case SET_APP_TITLE:
      return merge(state, { title: action.payload })
    default:
      return state
  }
}

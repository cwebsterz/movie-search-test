import { SET_FAVORITES } from '../constants'

export default (
  state = [
    {
      name: 'Saints and Sinners',
      id: '5HSdx1824FepWuf8NbG7B3',
      poster: 'https://i.scdn.co/image/f896b4651bea2a75dc1418a284473c02444c0c1c'
    }
  ],
  action
) => {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload
    default:
      return state
  }
}

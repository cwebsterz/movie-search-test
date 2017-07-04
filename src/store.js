import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import favorites from './reducers/favorites'

const store = createStore(
  combineReducers({
    app,
    favorites
  }),
  applyMiddleware(thunk)
)

export default store

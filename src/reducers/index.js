import { combineReducers } from 'redux'
import todo from './todo'
import draft from './draft'
import filter from './filter'

const rootReducer = combineReducers({
  todo,
  draft,
  filter
})

export default rootReducer

import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import DataReducer from './DataReducer'
import FilterVerbReducer from './FilterVerbReducer'
/** Переделать * */
export default combineReducers({
  user: UserReducer,
  data: DataReducer,
  filter: FilterVerbReducer
})

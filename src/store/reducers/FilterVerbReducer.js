import { FILTER } from '../constants'

const InitialState = {}

export default (state = InitialState, action) => {
  if (action.type === FILTER) {
    return action.filter
  } else {
    return state
  }
}

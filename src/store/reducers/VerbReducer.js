import { ADD_VERB } from '../constants'

const InitialState = {
  userVerb: []
}

export default (state = InitialState, action) => {
  if (action.type === ADD_VERB) {
    return { ...state, ...action.data }
  } else {
    return state
  }
}

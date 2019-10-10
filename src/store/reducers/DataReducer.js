import { DATA_FETCHED, DATA_FAILED } from '../constants'

const InitialState = {
  userVerb: [],
  defaultVerb: [],
  error: undefined,
  isLoading: true
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case DATA_FETCHED:
      return {
        ...state,
        ...action.data,
        isLoading: false
      }
    case DATA_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

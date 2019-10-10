import { USER } from '../constants'

const InitialState = {
  username: '',
  email: '',
  password: ''
}

export default (state = InitialState, action) => {
  if (action.type === USER) {
    return action.user
  } else {
    return state
  }
}

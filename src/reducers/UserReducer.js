import {
    USER,
    DATA_FETCHED,
    DATA_FAILED
} from '../constants/ActionTypes'

const InitialState = {
    user: {
        username: '',
        email: '',
        password: ''
    },
    data: {
        userVerb: [],
        defaultVerb: []
    }
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case USER:
            return { ...state, user: action.user }
        case DATA_FETCHED:
            return { ...state, data: action.data }
        case DATA_FAILED:
            return { ...state }
        default:
            return state
    }
}
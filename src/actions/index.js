import {
    USER,
    DATA_FETCHED,
    DATA_FAILED
} from '../constants/ActionTypes'

export const userChanged = (user) => {
    return {
        type: USER,
        user
    };
}

export const getData = (token) => async (dispatch) => {
    /** Доделать, когда будет готова верстка списка **/
    function onSuccess(data) {
        dispatch({ type: DATA_FETCHED, data })
        return data
    }
    function onError(error) {
        dispatch({ type: DATA_FAILED, error })
    }
    try {
        /*const URL = ''
        const res = await fetch(URL, {method: 'GET'})*/
        const data = /*await res.json()*/ {
            userVerb: [],
            defaultVerb: [
                {
                    id: '1',
                    title: 'être'
                },
                {
                    id: '2',
                    title: 'avoir'
                },
                {
                    id: '3',
                    title: 'faire'
                },
                {
                    id: '4',
                    title: 'aller'
                },
                {
                    id: '5',
                    title: 'pouvoir'
                },
                {
                    id: '6',
                    title: 'savoir'
                },
                {
                    id: '7',
                    title: 'dire'
                },
                {
                    id: '8',
                    title: 'vouloir'
                },
                {
                    id: '9',
                    title: 'lire'
                },
                {
                    id: '10',
                    title: 'aimer'
                },
            ]
        }
        return onSuccess(data)
    } catch (error) {
        return  onError(error)
    }
}
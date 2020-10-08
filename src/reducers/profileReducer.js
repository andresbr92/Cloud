import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE

} from '../types'

const initialState = {
    profile: null,
    isLoggedIn: null,
    loading: false,
    social:''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                
                ...state,
                profile: action.payload,
                isLoggedIn: true,
                social: action.social
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types'

//add profile to state
export function addProfileAction(profile, social) {
    return async (dispatch) => {
        try {
           await dispatch(addProfileToState(profile, social))
            console.log(social)
        } catch (error) {
            console.log(error)
            dispatch(addProfileToStateError(true))
            
        }
    }
}
const addProfileToState = (profile, social) => ({
    type: LOGIN_SUCCESS,
    payload: profile,
    social
})
const addProfileToStateError = state => ({ 
    type: LOGIN_FAILURE,
    payload:state
})
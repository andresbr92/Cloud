import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import userReducer from './usersReducer'

export default combineReducers({
    profile: profileReducer,
    users: userReducer
    
})
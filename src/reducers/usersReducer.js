import {
    GET_USERS_SUCCESS,
    CREATE_USER_SUCCESS,
    START_DOWNLOAD_USERS,
    CREATE_USER_FAILURE,
    ONE_USER_SUCCESS,
    GET_USER_EDIT,
    EDIT_USER_SUCCESS,
    GET_USERS_FAILURE,
    ONE_USER_FAILURE,
    EDIT_USER_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from '../types'


const initialState = {
    users: [],
    getOneUser: '',
    error: null,
    loading: false,
    userToEdit:'',
    page: 1,
}


export default function (state = initialState, action) {
    
    switch (action.type) {
        case START_DOWNLOAD_USERS:
            return {
                ...state,
                loading: true
            }
        case CREATE_USER_FAILURE:
        case GET_USERS_FAILURE:
        case ONE_USER_FAILURE:
        case DELETE_USER_FAILURE:
        case EDIT_USER_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users:[...state.users, action.payload]
            }
    
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.data.slice(0,5),
                loading: false,
                page:action.page
            }
        case ONE_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                getOneUser:action.payload.data
            }
        case GET_USER_EDIT:
            return {
                ...state,
                userToEdit:action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                //in case of real database, we filter the answer.
               // users: state.users.filter(user => user.id !== state.userToDelete)
            }
        case EDIT_USER_SUCCESS: 
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? user = action.payload : user)
            }
        default:
            return state
    }
}
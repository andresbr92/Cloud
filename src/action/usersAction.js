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
import userService from '../config/axios'
import Swal from 'sweetalert2'



//add users list to state
export function getUsersListAction(page) {
    return async (dispatch) => {
        dispatch(startDownloadUser())
        try {
            const response = await userService.get(`/api/users?page=${page}`)
            dispatch(getUsersSuccess(response.data, page))

        } catch (error) {
            dispatch(getUsersFailure())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}
const startDownloadUser = () => ({
    type: START_DOWNLOAD_USERS
})
const getUsersSuccess = (response, page) => ({
    type: GET_USERS_SUCCESS,
    payload: response,
    page

})
const getUsersFailure = () => ({
    type: GET_USERS_FAILURE,
    payload: true,
})
//get one user details
export function getUserDetailAction(id) {
    return async (dispatch) => {
        try {
            const response = await userService.get(`/api/users/${id}`)
            dispatch(getOneUser(response))
        } catch (error) {
            dispatch(getOneUserFailure())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}

const getOneUser = response => ({
    type: ONE_USER_SUCCESS,
    payload: response
})
const getOneUserFailure = () => ({
    type: ONE_USER_FAILURE,
    payload:true
})
//create a new user
export function createNewUserAction(user) {
    return async (dispatch) => {
        try {
            dispatch(crateNewUserSuccess())
            const response = await userService.post('/api/users', user)
            console.log(response)
            Swal.fire('Success', 'The user was added to de DDBB', 'success')
        } catch (error) {
            dispatch(createNewUserFailure())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}
const crateNewUserSuccess = () => ({
    type: CREATE_USER_SUCCESS,
    payload: true,
})
const createNewUserFailure = () => ({
    type: CREATE_USER_FAILURE,
    payload:true
})

//get user to edit
export function getUserToEditAction(user) {
    return (dispatch) => {
        dispatch(getUserToEdit(user))
    }
}
const getUserToEdit = user => ({
    type: GET_USER_EDIT,
    payload: user
})
//edit user success
export function editUserSuccessAction(user) {
    return async (dispatch) => {
        try {
            const response = await userService.put(`/api/users/${user.id}`, user)
            console.log (response)
            dispatch(editUserSuccess(user))
            Swal.fire('Success', 'User User edited successfully.', 'success')

        } catch (error) {
            dispatch(editUserFailure())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}
const editUserSuccess = user => ({
    type: EDIT_USER_SUCCESS,
    payload: user
})
const editUserFailure = () => ({
    type: EDIT_USER_FAILURE,
    payload:true
})
//delete user
export function deleteUserAction(id) {
    return async (dispatch) => {
        try {
            dispatch(deleteUserSuccess())
            await userService.delete(`/api/users/${id}`)
            console.log(id)
            Swal.fire('Success', 'User deleted', 'success')
            
        } catch (error) {
            dispatch(deleteUserFailure())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })
            
            
        }
        
}
}
const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS
})
const deleteUserFailure = () => ({
    type: DELETE_USER_FAILURE
})
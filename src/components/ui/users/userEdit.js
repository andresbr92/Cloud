import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { editUserSuccessAction} from '../../../action/usersAction'




const EditUser = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    //new state user
    const [user, saveUser] = useState({
        first_name: '',
        email: ''
    })


    const userEdit = useSelector(state => state.users.userToEdit.data)
    const page = useSelector(state => state.users.page)

    useEffect(() => {
        saveUser(userEdit)

    }, [userEdit])
    
    const onChangeForm = e => {
        
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const { first_name, email } = user

    const handleForSubmit = e => {
        e.preventDefault()
        dispatch(editUserSuccessAction(user))
        history.push(`/users/${page}`)
    }
    
    return (
        <>
            {isLoggedIn ? <p> Add new user</p> : history.push('/login')}
            <form
            onSubmit={handleForSubmit}
            >
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Add a name'
                        name='first_name'
                        value={first_name}
                        onChange={onChangeForm}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter email'
                        name='email'
                        value={email}
                        onChange={onChangeForm}
                    />
                </div>
                <button
                    onClick={handleForSubmit}
                    type='submit'
                    className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                >Send</button>

            </form>


        </>
    );
}

export default EditUser;
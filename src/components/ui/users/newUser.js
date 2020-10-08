import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createNewUserAction } from '../../../action/usersAction'



const NewUserForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    const page = useSelector(state => state.users.page)

    const [name, saveName] = useState('')
    const [job, saveJob] = useState('')

    const addUser = user => dispatch(createNewUserAction(user))

    const handleForSubmit = e => {
        e.preventDefault()
        if (name === '' || job === '') {
            alert('por favor rellena los campos')

            return
        }
        addUser({
            name,
            job
        })
        saveName('')
        saveJob('')
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
                        name='name'
                        value={name}
                        onChange={e => saveName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Job</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter a job'
                        name='job'
                        value={job}
                        onChange={e => saveJob(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                >Send</button>

            </form>


        </>
    );
}

export default NewUserForm;
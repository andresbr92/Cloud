import React from 'react';
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addProfileAction } from '../../../../action/profileAction'



const FacebookLog = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    

    const page = useSelector(state => state.users.page)

    const callProfile = (profile,social) => {
        dispatch(addProfileAction(profile, social='facebook'))
        history.push(`/users/${page}`)

    }

    return (
        <FacebookLogin
            appId={process.env.REACT_APP_TEST_FACEBOOK}
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={callProfile}
            icon="fa-facebook" />
    );
}

export default FacebookLog;
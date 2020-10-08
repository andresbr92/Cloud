import React from 'react'
import TwitterLogin from "react-twitter-login";
import { useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addProfileAction } from '../../../../action/profileAction'


const TwitterLog = () => {


    const dispatch = useDispatch()
    const history = useHistory()

    const callProfile =( error, profile) => {
        console.log(error,profile)
        dispatch(addProfileAction(profile))
        history.push('/users')

    }

    return (
        

        <TwitterLogin
            authCallback={callProfile}
            consumerKey={process.env.REACT_APP_TEST_TWITTER}
            consumerSecret={process.env.REACT_APP_TEST_TWITTER_SECRET}
            callbackUrl='https://localhost:3000/'

        />
        
    );
}

export default TwitterLog;
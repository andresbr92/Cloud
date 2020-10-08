import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import GoogleLog from './socialMediaLog/googleLog'
import FacebookLog from './socialMediaLog/facebookLog'
import TwitterLog from './socialMediaLog/twitterLog'
//redux
import { useSelector} from 'react-redux'


const Social = styled.div`
    display:flex;
    flex-direction:column;
    padding: 4rem;
    margin:1rem;
    justify-content: center;
    width:500px;
    
`
const EachSocial = styled.section`
margin: 1rem;
display:flex;
justify-content:center;

`




const LoginForm = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    const page = useSelector(state => state.users.page)
    return (

        <div className='myContainer'>
            {isLoggedIn ?
                history.push(`/users/${page}`)
                :
                <>
                    <Social>
                        <EachSocial>
                            <GoogleLog />
                        </EachSocial>
                        <EachSocial>
                            <FacebookLog />
                        </EachSocial>
                        <EachSocial>
                            <TwitterLog />
                        </EachSocial>

                    </Social>
                </>
            }



        </div>

    );
}

export default LoginForm;
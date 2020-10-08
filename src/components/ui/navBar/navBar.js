import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import styled from 'styled-components'

//redux 
import { useSelector } from 'react-redux'


const NavBar = () => {
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    const pictureLog = useSelector(state => {
        switch (state.profile.social) {
            case 'facebook':
                return state.profile.profile.picture.data.url
            case 'google':
                return state.profile.profile.profileObj.imageUrl
            default:
                return null
        }
    })
    const nameLog = useSelector(state => {
        switch (state.profile.social) {
            case 'facebook':
                return state.profile.profile.name
            case 'google':
                return state.profile.profile.profileObj.name
            default:
                return null
        }
    })
    const page = useSelector(state => state.users.page)

    const CloudImage = styled.img`
    width:100px;
    height:50px;
    `

    return (
        <>
            
            <Navbar bg="dark" variant="dark">
                <CloudImage src={'https://pbs.twimg.com/profile_images/1306246610393931776/c3i_CtUR_400x400.png'}></CloudImage>
                
                <Link className='my-link' to="/">Cloud District</Link>
                <Nav className="mr-auto">
                    <Link className='my-link' to="/login">Log In</Link>
                    <Link className='my-link' to={`/users/${page}`}>People</Link>
                </Nav>
                <Form inline>
                    {isLoggedIn ? <Link className='my-link' to="/">{nameLog}</Link> : null}
                    {isLoggedIn ? <Image src={pictureLog} roundedCircle className='mr-4' /> : null}
                </Form>
            </Navbar>
        </>
    );
}

export default NavBar;
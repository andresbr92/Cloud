import React from 'react';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

import styled from 'styled-components'



const ContainerHome = styled.div`
    display:flex;
    padding:30px;
`


const Home = () => {
    return (
        <>
            <ContainerHome className='row'>
                <div className='col md-6'>
                    <Image src={'https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1601976488/job-covers/000/080/952/80952-original.png?1601976488'}></Image>

                </div>
                <div className='col md-6'>

                    <h3>This is a technical test for Cloud district. This is a CRUD with API consumption made with react redux, hooks, axios,styled components.</h3>
                    <hr></hr>
                    <p>To test the App, please go to: <Link className='btn btn-dark' to='/login' >Login</Link> </p>
                </div>
            </ContainerHome>
        </>
    );
}

export default Home;
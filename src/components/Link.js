import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Linking({title,path}) {
    return (
        <Linkdiv>
            <Link to={path}><h4>{title}</h4></Link>
        </Linkdiv>
    )
}

const Linkdiv = styled.div`
margin: 0 1.5rem;
width: max-content;


.class{
    text-decoration: none !important;
}

h4{
    color: #c0c0c0;
    font-size: 1.6rem;
    width: fit-content;
    text-align: justify;
    text-transform: capitalize;
    font-weight: 200;

    &:hover{
        transition: all 0.5s ease;
        color: #000;

    }
    

    @media(max-width:768px){
        font-size: 1.3rem;
    }
}
`

export default Linking

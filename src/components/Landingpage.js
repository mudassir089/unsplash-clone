import React from 'react'
import styled from 'styled-components'

function Landingpage() {

  

    const s ={
        background:'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://source.unsplash.com/1600x900/?nature,water")'
    }


    return (
        <Landingpagediv style={s}>
            <div className="contentdiv">
                <div className="heading">
                    <h1>Unsplash</h1>
                    <p>The internet’s source of freely-usable images.
Powered by creators everywhere.</p>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="search free high resolution photos"/>
                </div>
            </div>
        </Landingpagediv>
    )
}

const Landingpagediv = styled.div`
width: 100%;
min-height: 80vh;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;

@media(max-width:768px){
    width: 100%;
    flex-direction: column;
    margin: auto;
}

.contentdiv{
    width: 80rem;
    margin: auto;

    @media(max-width:768px){
    width: 90%;
    margin: auto;
}
}

.heading{

    width: 40rem;

    h1{
        font-size: 4rem;
        font-weight: 700;
color: #fff !important;

        text-transform: capitalize;
    }

    p{
        text-align: justify;
        font-size: 1.5rem;
        color: #fff !important;

    }

    @media(max-width:768px){
    width: 80%;

    h1{
        font-size: 2.5rem;
    }
}
}

.searchbar{
    width: 100%;

    input{
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: .2rem;
        background-color: #fff;
        color: #04040a;
        outline: transparent;
        font-size: 1.5rem;
    }

    @media(max-width:768px){
    width: 70%;
    margin-left: 1rem;
}
}

.para{
    text-align: center;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.5rem;
    position: absolute;
    /* width: 40rem; */
}

`

export default Landingpage

import React from 'react'
import styled from 'styled-components'
import Linking from './Link'

function Navbarparttwo() {
    return (
        <Navbardiv>
            <Linking title="Home" path="/"/>
            <Linking title="Wallpapers" path="/wallpaper"/>
            <Linking title="Fashion" path="/fashion"/>
            <Linking title="3dRenders" path="/3d-Renders"/>
            <Linking title="foodsanddrinks" path="/food-drink"/>
            <Linking title="history" path="/history"/>
            <Linking title="architecture" path="/architecture"/>
            <Linking title="nature" path="/nature"/>
            <Linking title="film" path="/film"/>
            <Linking title="texturesPatterns" path="/textures-patterns"/>
            <Linking title="streetphotography" path="/street-photography"/>
            <Linking title="experimental" path="/experimental"/>
            <Linking title="interior" path="/interiors"/>
            <Linking title="artsandculture" path="/arts-culture"/>
            <Linking title="Animals" path="/animals"/>
            <Linking title="People" path="/people"/>
            <Linking title="Travel" path="/travel"/>
        </Navbardiv>
    )
}

const Navbardiv = styled.div`
width: 100%;
height: 10vh;
padding: .5rem;
display: flex;
align-items: center;
overflow-x: scroll !important;
overflow-y:hidden;

&::-webkit-scrollbar{
    -webkit-appearance: none;
}

`

export default Navbarparttwo

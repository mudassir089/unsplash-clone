import React from 'react'
import styled from 'styled-components'

function Preloader() {
    return (
        <Preloaderdiv>
            <div className="loaded"></div>
        </Preloaderdiv>
    )
}

const Preloaderdiv = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.4);
z-index: 13;
width: 100%;
min-height: 100vh;
`

export default Preloader

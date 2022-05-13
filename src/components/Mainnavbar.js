import React,{useState} from 'react'
import styled from 'styled-components'
import Navbarpartone from './Navbarpartone'
import Navbarparttwo from './Navbarparttwo'

function Mainnavbar() {

    // const [scroll,isscroll] = useState(false)

    // const newfunc = () => {
    //     if(window.scrollY > 100){
    //         return isscroll(true)
    //     }else{
    //             isscroll(false)
    //     }
    // }

    // window.addEventListener('scroll',newfunc)

    return (
        <Mainnav>
            <Navbarpartone />
            <Navbarparttwo />
        </Mainnav>
    )
}

const Mainnav = styled.div`



`

export default Mainnavbar

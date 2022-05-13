import React from 'react'
import styled from 'styled-components'
import image from '../images/unsplash-2.svg'
import {Button,Avatar} from 'antd'
import {BellOutlined,MenuFoldOutlined} from '@ant-design/icons'
import {getsearchpagedata,searchquery,errorhandling,loadhandling,emptyarray} from '../features/searchdata'
import { SEARCH_CALL_API,searchpageurl } from "../apis/api";
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Navbarpartone() {

    const dispatch = useDispatch()
    const history = useHistory()
    const query = useSelector(state => state.SearchedImagedata.query)
    const page = useSelector((state) => state.SearchedImagedata.page);


    const searchvalue = (e) => {
      dispatch(searchquery(e.target.value))
      dispatch(emptyarray())
    }

    const submitapicall = (e) => {
      e.preventDefault()
      SEARCH_CALL_API(searchpageurl(page,query),getsearchpagedata,dispatch,errorhandling,loadhandling)
      history.push(`/search/${query}`)

    }

    return (
        <Navbardiv>
            <Navbarleft>
                 <img src={image} alt="" />
                 <form onSubmit={submitapicall}>
                 <input type="text" placeholder="search free high resolution photos" onChange={searchvalue}/>
                 </form>
            </Navbarleft>
            <Navbarright>
                  <h4 className="hide">Brands</h4>
                  <h4 className="hide">Blogs</h4>
                  <Button className="hide">Submit a photo</Button>
                  <BellOutlined className="hide"/>
                  <Avatar />
                 <MenuFoldOutlined /> 
            </Navbarright>
        </Navbardiv>
    )
}

const Navbardiv = styled.div`
width: 100%;
min-height:10vh;
padding: 1rem;
display: flex;
align-items: center;

.hide{
    display: block;
}

@media(max-width:768px){

    width: 100%;
    justify-content: space-between;

    img{
        width: 25px !important;
        height: 25px !important;
    }

    .hide{
        display: none;
    }
}
`

const Navbarleft = styled.div`

display: flex;
align-items: center;
width: 65%;

@media(max-width:768px){
    width: 65%;
}


img{
    width: 40px;
    height: 40px;
}

form{
    width: 90%;

}

input{
    width: 100%;
    border-radius: 1.8rem;
    padding: .9rem;
    border:none;
    outline: transparent;
    background-color: #EEEEEE;
    margin-left: 1.5rem;
    font-size: 1.4rem;
    color: #c0c0c0;

    
}

`

const Navbarright = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 35%;

@media(max-width:768px){
    width: 25%;
    
}

h4{
color: #C0c0c0;
cursor: pointer;

&:hover{
    transition: all 0.5s ease;
    color: #000;
}

}
svg{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
`

export default Navbarpartone

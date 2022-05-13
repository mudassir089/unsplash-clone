import React from 'react'
import styled from 'styled-components'
import {List,Avatar, Button} from 'antd'
import {UserOutlined,UsergroupAddOutlined,PictureOutlined,GlobalOutlined} from '@ant-design/icons'

function Displaypage({titl,descrip}) {

    const data = [
        {
            Avatar:<GlobalOutlined />,
            title:"status",
        },
        {
            Avatar:<UserOutlined />,
            title:"Curator",
        },
        {
            Avatar:<PictureOutlined />,
            title:"Contribution",
        },
        {
            Avatar:<UsergroupAddOutlined />,
            title:"Top Contributors",
        }
    ]

    return (
        <Displaydiv>
            <Leftdiv>
                <h1>{titl}</h1>
                <p>{descrip}</p>
            </Leftdiv>
            <Rightdiv>
                <div className="list">
            <List
    itemLayout="horizontal"
    dataSource={data}
    bordered
    size="large"
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={item.Avatar}
          title={<a href="https://ant.design">{item.title}</a>}
        />
      </List.Item>
    )}
  />
  <Button >Submit a photo</Button>
  </div>
            </Rightdiv>
        </Displaydiv>
    )
}

const Displaydiv = styled.div`
min-height: 65vh;
width: 100%;
display: flex;
justify-content: space-between;
padding: 1rem;
background-color: #fff;

@media(max-width:768px){
    flex-direction: column;
    width: 100%;
    margin: auto;
}
`

const Leftdiv = styled.div`
width: 50%;
margin-top: 2.5rem;
padding: 1rem;
h1{
    font-size: 5rem;
    font-weight: 700;
}

p{
    text-align: justify;
    font-size: 1.5rem;
}

@media(max-width:768px){
    width: 100%;
    margin: auto;

    h1{
        font-size: 2.5rem;
        text-align: center;

    }

    p{
        text-align: center;
    }
}


`

const Rightdiv = styled.div`
margin-top: 2.5rem;

width: 40rem;

button{
    background-color: #04040a;
    color: #fff;
    width: 100%;
    font-size: 1.4rem;
    padding: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

.list{
    width: 40rem;
    padding: 2.5rem;

}

@media(max-width:768px){
    width: 100%;
    margin: auto;

    .list{
        width: 30rem;
        margin: auto;
        padding: 1.5rem;
    }
}

`

export default Displaypage

import React,{useEffect} from "react";
import styled from "styled-components";
import { useHistory,useLocation } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { PageHeader, Button, Affix, Tag, List, Image } from "antd";
import {CALL_API,photodetailsurl} from '../apis/api'
import {getphotodetails,errorhandling,loadhandling,gettinglocalstorage} from '../features/photodetailsdata'
import {
  ShareAltOutlined,
  HeartFilled,
  SmallDashOutlined,
  CheckCircleOutlined,
  CameraFilled,
  CalendarOutlined,
  InfoCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";

function Photodetailpage() {
const history = useHistory()
    const getrid = (e) => {
        const target = e.target
        if(target.classList.contains('shadow')){
        document.body.style.overflow = 'auto'
        history.goBack()
        }
    }

    const photodata = useSelector(state => state.Photodetails.photodetails)
    const loader = useSelector(state => state.Photodetails.isLoading)
    const error = useSelector(state => state.Photodetails.error)

   
  const data = [
    
    {
      description: `published on ${photodata.created_at}`,
      Avatar: <CalendarOutlined />,
    },
    {
      description: `shot on ${photodata.exif.name}`,
      Avatar: <CameraFilled />,
    },
    {
      description: "Free to use under the Unsplash License",
      Avatar: <CheckCircleOutlined />,
    },
  ];

  return (
      <>
        {error ? 'please refresh the page' : ''}

      {photodata ? (
        <Cardshadow className="shadow" onClick={getrid}>
    <Photodetaildiv>
      <Affix>
        <PageHeader
          title={photodata.user.username}
          subTitle="chill"
          avatar={{
            src: photodata.user.profile_image.small,
          }}
          extra={[
            <Button key="3" icon={<HeartFilled />}></Button>,
            <Button key="2" icon={<PlusOutlined />}></Button>,
            <Button key="1">Download</Button>,
          ]}
        ></PageHeader>
      </Affix>

      <div className="imagewrapper">
        <div className="imagediv">
          <Image src={photodata.urls.regular} />
        </div>
      </div>

      <Infodiv>
        <Infoleftdiv>
          <div>
            <p>Views</p>
            <h3>{photodata.views}</h3>
          </div>
          <div>
            <p>Downloads</p>
            <h3>{photodata.downloads}</h3>
          </div>
          <div>
            <p>Featured in</p>
            <h3>Editorial</h3>
          </div>
        </Infoleftdiv>
        <Inforightdiv>
          <Button icon={<ShareAltOutlined />}>share</Button>
          <Button icon={<InfoCircleFilled />}>info</Button>
          <Button icon={<SmallDashOutlined />}></Button>
        </Inforightdiv>
      </Infodiv>

      <Parainfodiv>
        <List
          itemLayout="horizontal"
          dataSource={data}
          bordered={false}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.Avatar}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Parainfodiv>

       <div className="tagwrapper">
           <h1>Related tags</h1>
           <div className="tagsdiv">
               {photodata.tags.map((tag,i) => {
                   return <Tag key={i} style={{padding:".7rem",fontSize:"1.3rem"}}>{tag.title}</Tag>
               })}
           </div>
       </div>

    </Photodetaildiv>
    </Cardshadow>
      ) : ''}
    
    </>
  );
}

const Cardshadow = styled.div`
position: fixed;
background-color: rgba(0,0,0,0.5);
top: 0;
left: 0;
overflow-y: scroll;
z-index: 10;
width: 100%;
min-height: 100vh;
`

const Photodetaildiv = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  width: 85%;
  margin: auto !important;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);
  background-color: #fff;

  .tagwrapper{
      width: 100%;
      padding: 1rem;
      margin-top: 1rem;

      h1{
          margin-left: 1rem;
          font-size: 2rem;

        }
  }

  .tagsdiv{
      display: flex;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      margin-top: 1rem;
      padding: 1rem;
      
  }

  .imagewrapper {
    width: 100%;
  }

  .imagediv {
    width: 70%;
    margin: auto;
  }
`;

const Infodiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;

  @media(max-width:768px){
      flex-direction: column;
      width: 100%;
  }
`;

const Infoleftdiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  justify-content: space-between;
  line-height: 0.7;

  @media(max-width:768px){
      width: 100%;
      justify-content: space-around;
  }

`;

const Inforightdiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width:768px){
      width: 100%;
      justify-content: space-around;
  }
`;

const Parainfodiv = styled.div`
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export default Photodetailpage;

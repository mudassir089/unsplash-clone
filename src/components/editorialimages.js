import React from "react";
import Masonry from "react-masonry-css";
import { useInfinitescroll } from "../apis/api";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CALL_API } from "../apis/api";
import { photodetailsurl } from "../apis/api";
import {getphotodetails,errorhandling,loadhandling} from '../features/photodetailsdata'
import {Link,useHistory} from 'react-router-dom'

function Editorialimages({data,error,loader,dispatch,page}) {


  const dist = useDispatch()
  const history = useHistory()

  const clicked = async (id) => {
     await CALL_API(photodetailsurl(id),getphotodetails,dist,errorhandling,loadhandling)
     document.body.style.overflow = 'hidden'
     history.push(`/photos/${id}`)
  }

 
  const [lastdivref] = useInfinitescroll(dispatch,loader,page);

  const breakpointColumnsObj = {
    // default: 3,
    '2500':3,
    '1100': 2,
    '700': 1,
    '500': 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {loader ? <div className="loader"></div> : ""}
        {error ? 'please refresh the page' : ''}
        {data &&
          data.map((img, i) => {
            if (data.length === i + 1) {
              return (
                // <Link to={`/photos/${img.id}`}>
                <div key={i} ref={lastdivref} onClick={() => clicked(data.id)}>
                  <img src={img.urls.small} alt="pic" crossOrigin="anonymous"></img>
                </div>
                // </Link>

              );
            } else {
              return (
                // <Link to={`/photos/${img.id}`}>
                <div key={i} onClick={() => clicked(img.id)}>
                  <img src={img.urls.small} alt="pic"></img>
                </div>
                // </Link>

              );
            }
          })}
      </Masonry>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  background-color: #fff;
  display: grid;
  place-items: center;
  margin-top: 2.5rem;
  overflow-x: auto;
  white-space: nowrap;

  /* @media (max-width: 1200px) {
    width: 100%;
    overflow-x: hidden !important;
  } */
`;

export default Editorialimages;

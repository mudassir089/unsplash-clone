import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';
import Editorialimages from '../components/editorialimages';
import {increasepagenum} from '../features/searchdata'
import { SEARCH_CALL_API,searchpageurl } from "../apis/api";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";

import {getsearchpagedata,searchquery,errorhandling,loadhandling} from '../features/searchdata'



function Search() {

    const data = useSelector((state) => state.SearchedImagedata.search);
    const loader = useSelector((state) => state.SearchedImagedata.isloading);
    const error = useSelector(state => state.SearchedImagedata.error)
    const query = useSelector(state => state.SearchedImagedata.query)
    const page = useSelector((state) => state.SearchedImagedata.page);
    const [pathid,Preloader,preloader] = useId()


    const dispatch = useDispatch()

    useEffect(() => {
        const tryit = async () => {
          await SEARCH_CALL_API(searchpageurl(page,query), getsearchpagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page]);

    return (
        <>
              {preloader && <Preloader />}
      {/* {pathid && <Photodetailpage />} */}

        <Headingdiv>
            <h1>Searched results</h1>
        </Headingdiv>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
       </>
    )
}

const Headingdiv = styled.div`
min-height: 10vh;


h1{
    font-size:3rem;
    font-weight: 500;
    margin-left: 5rem;
    
}
`

export default Search

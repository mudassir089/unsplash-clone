import React, { useEffect } from "react";
import Landingpage from "../components/Landingpage";
import { gethomepagedata,errorhandling,loadhandling,increasepagenum } from "../features/data";
import { CALL_API } from "../apis/api";
import { homepageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Photodetailpage from "./Photodetailpage";
import useId from '../components/useid'

function Home() {
  const page = useSelector((state) => state.Imagedata.page);
  const data = useSelector((state) => state.Imagedata.home);
  const loader = useSelector((state) => state.Imagedata.isloading);
  const error = useSelector(state => state.Imagedata.error)
  
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {

    const tryit = async () => {
      await CALL_API(homepageurl(page), gethomepagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();

    
  }, [dispatch,page]);

  return (
    <>
      {preloader && <Preloader />}
      {pathid && <Photodetailpage />}
      <Landingpage />
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Home;

import React, { useEffect } from "react";
import { getnaturepagedata,errorhandling,loadhandling,increasepagenum } from "../features/naturedata";
import { CALL_API } from "../apis/api";
import { naturepageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Nature() {
  const page = useSelector((state) => state.NatureImagedata.page);
  const data = useSelector((state) => state.NatureImagedata.nature);
  const loader = useSelector((state) => state.NatureImagedata.isloading);
  const error = useSelector(state => state.NatureImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(naturepageurl(page), getnaturepagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Nature" descrip="Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Nature;

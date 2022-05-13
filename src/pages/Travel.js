import React, { useEffect } from "react";
import { gettravelpagedata,errorhandling,loadhandling,increasepagenum } from "../features/traveldata";
import { CALL_API } from "../apis/api";
import { travelpageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";



function Travel() {
  const page = useSelector((state) => state.TravelImagedata.page);
  const data = useSelector((state) => state.TravelImagedata.travel);
  const loader = useSelector((state) => state.TravelImagedata.isloading);
  const error = useSelector(state => state.TravelImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(travelpageurl(page), gettravelpagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Travel" descrip="Discover hidden wonders and inspiring destinations around the world from the comfort of your own home."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Travel;
import React, { useEffect } from "react";
import { getstreetpagedata,errorhandling,loadhandling,increasepagenum } from "../features/streetdata";
import { CALL_API } from "../apis/api";
import { streetpageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Street() {
  const page = useSelector((state) => state.StreetImagedata.page);
  const data = useSelector((state) => state.StreetImagedata.street);
  const loader = useSelector((state) => state.StreetImagedata.isloading);
  const error = useSelector(state => state.StreetImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(streetpageurl(page), getstreetpagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Street Photography" descrip="From early morning commutes to neon-tinted nights, our streets have become the fabric of our shared history. This category encompasses street photography in every form."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Street;
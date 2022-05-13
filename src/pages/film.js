import React, { useEffect } from "react";
import { getfilmpagedata,errorhandling,loadhandling,increasepagenum } from "../features/filmdata";
import { CALL_API } from "../apis/api";
import { filmpageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Film() {
  const page = useSelector((state) => state.FilmImagedata.page);
  const data = useSelector((state) => state.FilmImagedata.film);
  const loader = useSelector((state) => state.FilmImagedata.isloading);
  const error = useSelector(state => state.FilmImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(filmpageurl(page), getfilmpagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Film" descrip="Beautiful analog photography from the past and present day — featuring polaroids, black and white images, grainy portraits, and more."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Film;
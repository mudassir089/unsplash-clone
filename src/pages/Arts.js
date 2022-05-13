import React, { useEffect } from "react";
import { getartspagedata,errorhandling,loadhandling,increasepagenum } from "../features/artsdata";
import { CALL_API } from "../apis/api";
import { artspageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Arts() {
  const page = useSelector((state) => state.ArtsImagedata.page);
  const data = useSelector((state) => state.ArtsImagedata.arts);
  const loader = useSelector((state) => state.ArtsImagedata.isloading);
  const error = useSelector(state => state.ArtsImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(artspageurl(page), getartspagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Arts & Culture" descrip="Your daily dose of culture — with photography showcasing the best in art, music and literature from around the world."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Arts;
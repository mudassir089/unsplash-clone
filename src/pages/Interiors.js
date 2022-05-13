import React, { useEffect } from "react";
import { getinteriorspagedata,errorhandling,loadhandling,increasepagenum } from "../features/interiorsdata";
import { CALL_API } from "../apis/api";
import { interiorspageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Interiors() {
  const page = useSelector((state) => state.InteriorsImagedata.page);
  const data = useSelector((state) => state.InteriorsImagedata.interiors);
  const loader = useSelector((state) => state.InteriorsImagedata.isloading);
  const error = useSelector(state => state.InteriorsImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(interiorspageurl(page), getinteriorspagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Interiors" descrip="Whether it’s a peaceful bedroom or a cluttered kitchen — photographs of our spaces tell the story of who we are."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Interiors;
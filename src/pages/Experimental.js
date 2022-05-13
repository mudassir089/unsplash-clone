import React, { useEffect } from "react";
import { getexperimentalpagedata,errorhandling,loadhandling,increasepagenum } from "../features/experimentaldata";
import { CALL_API } from "../apis/api";
import { experimentalpageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Experimental() {
  const page = useSelector((state) => state.ExperimentalImagedata.page);
  const data = useSelector((state) => state.ExperimentalImagedata.experimental);
  const loader = useSelector((state) => state.ExperimentalImagedata.isloading);
  const error = useSelector(state => state.ExperimentalImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(experimentalpageurl(page), getexperimentalpagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Experimental" descrip="Through the use of unlikely textures, intriguing subject matter, and new formats — photography has the power to challenge our perspectives and push creativity forward."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Experimental;
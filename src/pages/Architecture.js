import React, { useEffect } from "react";
import { getarchitecturepagedata,errorhandling,loadhandling,increasepagenum } from "../features/architecturedata";
import { CALL_API } from "../apis/api";
import { architecturepageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Architecture() {
  const page = useSelector((state) => state.ArchitectureImagedata.page);
  const data = useSelector((state) => state.ArchitectureImagedata.architecture);
  const loader = useSelector((state) => state.ArchitectureImagedata.isloading);
  const error = useSelector(state => state.ArchitectureImagedata.error)

  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(architecturepageurl(page), getarchitecturepagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Architecture" descrip="Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Architecture;
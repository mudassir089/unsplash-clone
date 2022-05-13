import React, { useEffect } from "react";
import { gettexturespagedata,errorhandling,loadhandling,increasepagenum } from "../features/texturesdata";
import { CALL_API } from "../apis/api";
import { texturespageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Textures() {
  const page = useSelector((state) => state.TextureImagedata.page);
  const data = useSelector((state) => state.TextureImagedata.textures);
  const loader = useSelector((state) => state.TextureImagedata.isloading);
  const error = useSelector(state => state.TextureImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(texturespageurl(page), gettexturespagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Textures & Patterns" descrip="Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Textures;
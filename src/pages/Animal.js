import React, { useEffect } from "react";
import { getanimalpagedata,errorhandling,loadhandling,increasepagenum } from "../features/animaldata";
import { CALL_API } from "../apis/api";
import { animalspageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";



function Animal() {
  const page = useSelector((state) => state.AnimalImagedata.page);
  const data = useSelector((state) => state.AnimalImagedata.animal);
  const loader = useSelector((state) => state.AnimalImagedata.isloading);
  const error = useSelector(state => state.AnimalImagedata.error)

  const [pathid,Preloader,preloader] = useId()


  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(animalspageurl(page), getanimalpagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="Animals" descrip="Exotic wildlife, pet kittens — and everything in between. Uncover the beauty of the animal kingdom through your screen."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default Animal;
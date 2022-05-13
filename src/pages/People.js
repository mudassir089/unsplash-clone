import React, { useEffect } from "react";
import { getpeoplepagedata,errorhandling,loadhandling,increasepagenum } from "../features/peopledata";
import { CALL_API } from "../apis/api";
import { peoplepageurl } from "../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Editorialimages from "../components/editorialimages";
import Displaypage from "../components/displaypage";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function People() {
  const page = useSelector((state) => state.PeopleImagedata.page);
  const data = useSelector((state) => state.PeopleImagedata.people);
  const loader = useSelector((state) => state.PeopleImagedata.isloading);
  const error = useSelector(state => state.PeopleImagedata.error)
  const [pathid,Preloader,preloader] = useId()

  const dispatch = useDispatch();
  useEffect(() => {
    const tryit = async () => {
      await CALL_API(peoplepageurl(page), getpeoplepagedata, dispatch,errorhandling,loadhandling);
    };
    tryit();
  }, [dispatch,page]);

  return (
    <>
          {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

      <Displaypage titl="People" descrip="Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story."/>
      <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
    </>
  );
}

export default People;
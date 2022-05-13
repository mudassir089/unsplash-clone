import React,{useEffect} from 'react'
import Displaypage from '../components/displaypage'
import Editorialimages from '../components/editorialimages'
import { getfoodpagedata,errorhandling,loadhandling,increasepagenum } from "../features/fooddata";
import { CALL_API } from "../apis/api";
import { foodanddrinkpageurl } from '../apis/api';
import { useDispatch, useSelector } from "react-redux";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";



function Foodanddrink() {

    const page = useSelector((state) => state.FoodImagedata.page);
    const data = useSelector((state) => state.FoodImagedata.food);
    const loader = useSelector((state) => state.FoodImagedata.isloading);
    const error = useSelector(state => state.FoodImagedata.error)
    const [pathid,Preloader,preloader] = useId()
  
    const dispatch = useDispatch();

    useEffect(() => {
        const tryit = async () => {
          await CALL_API(foodanddrinkpageurl(page), getfoodpagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page]);


    return (
        <>
              {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

            <Displaypage titl="Food & Drink" descrip="It’s time to indulge, and throw yourself into the world of culinary photography — with shots of elaborate dinner parties, decadent pastries and more."/>
            <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
        </>
    )
}

export default Foodanddrink
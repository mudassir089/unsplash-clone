import React,{useEffect} from 'react'
import Displaypage from '../components/displaypage'
import Editorialimages from '../components/editorialimages'
import { getfashionpagedata,errorhandling,loadhandling,increasepagenum } from "../features/fashiondata";
import { CALL_API } from "../apis/api";
import { fashionpageurl } from '../apis/api';
import { useDispatch, useSelector } from "react-redux";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";



function Fashion() {

    const page3 = useSelector((state) => state.FashionImagedata.page);
    const data3 = useSelector((state) => state.FashionImagedata.fashion);
    const loader3 = useSelector((state) => state.FashionImagedata.isloading);
    const error3 = useSelector(state => state.FashionImagedata.error)
    const [pathid,Preloader,preloader] = useId()
  
    const dispatch = useDispatch();

    useEffect(() => {
        const tryit = async () => {
          await CALL_API(fashionpageurl(page3), getfashionpagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page3]);



    return (
        <>
              {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

          <Displaypage titl="Fashion" descrip="From street-style shots to editorial photography — find the latest trends in beauty and fashion."/>
          <Editorialimages data={data3} error={error3} loader={loader3} dispatch={dispatch} page={increasepagenum}/>  
        </>
    )
}

export default Fashion

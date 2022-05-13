import React,{useEffect} from 'react'
import Displaypage from '../components/displaypage'
import Editorialimages from '../components/editorialimages'
import { getthreedpagedata,errorhandling,loadhandling,increasepagenum } from "../features/threeddata";
import { CALL_API } from "../apis/api";
import { threedpageurl } from '../apis/api';
import { useDispatch, useSelector } from "react-redux";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";


function Threed() {

    const page = useSelector((state) => state.ThreedImagedata.page);
    const data = useSelector((state) => state.ThreedImagedata.threed);
    const loader = useSelector((state) => state.ThreedImagedata.isloading);
    const error = useSelector(state => state.ThreedImagedata.error)
    const [pathid,Preloader,preloader] = useId()
  
    const dispatch = useDispatch();

    useEffect(() => {
        const tryit = async () => {
          await CALL_API(threedpageurl(page), getthreedpagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page]);



    return (
        <>
              {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

            <Displaypage titl="3D Renders" descrip="For the first time ever, Unsplash is accepting a new category of images outside of photography. Submit your 3-dimensional images, designed in the software of your choice, rendered into JPEG images."/>
            <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
        </>
    )
}

export default Threed

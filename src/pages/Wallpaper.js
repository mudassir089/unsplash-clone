import React,{useEffect} from 'react'
import Displaypage from '../components/displaypage'
import Editorialimages from '../components/editorialimages'
import { getwallpaperpagedata,errorhandling,loadhandling,increasepagenum } from "../features/wallpaperdata";
import { CALL_API } from "../apis/api";
import { wallpaperpageurl } from '../apis/api';
import { useDispatch, useSelector } from "react-redux";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";




function Wallpaper() {

    const page2 = useSelector((state) => state.WallpaperImagedata.page);
    const data2 = useSelector((state) => state.WallpaperImagedata.wallpaper);
    const loader2 = useSelector((state) => state.WallpaperImagedata.isloading);
    const error2 = useSelector(state => state.WallpaperImagedata.error)
    const [pathid,Preloader,preloader] = useId()
  
    const dispatch = useDispatch();

    useEffect(() => {
        const tryit = async () => {
          await CALL_API(wallpaperpageurl(page2), getwallpaperpagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page2]);


    return (
        <>
              {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

            <Displaypage titl="Wallpapers" descrip="From epic drone shots to inspiring moments in nature — submit your best desktop backgrounds"/>
            <Editorialimages data={data2} error={error2} loader={loader2} dispatch={dispatch} page={increasepagenum}/>
        </>
    )
}

export default Wallpaper

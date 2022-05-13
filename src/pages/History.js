import React,{useEffect} from 'react'
import Displaypage from '../components/displaypage'
import Editorialimages from '../components/editorialimages'
import { gethistorypagedata,errorhandling,loadhandling,increasepagenum } from "../features/historydata";
import { CALL_API } from "../apis/api";
import { historypageurl } from '../apis/api';
import { useDispatch, useSelector } from "react-redux";
import useId from '../components/useid'
import Photodetailpage from "./Photodetailpage";



function History() {

    const page = useSelector((state) => state.HistoryImagedata.page);
    const data = useSelector((state) => state.HistoryImagedata.history);
    const loader = useSelector((state) => state.HistoryImagedata.isloading);
    const error = useSelector(state => state.HistoryImagedata.error)
    const [pathid,Preloader,preloader] = useId()
  
    const dispatch = useDispatch();

    useEffect(() => {
        const tryit = async () => {
          await CALL_API(historypageurl(page), gethistorypagedata, dispatch,errorhandling,loadhandling);
        };
        tryit();
      }, [dispatch,page]);


    return (
        <>
              {preloader && <Preloader />}
      {pathid && <Photodetailpage />}

            <Displaypage titl="History" descrip="Powerful photographs from the past — exploring monumental moments throughout our shared history."/>
            <Editorialimages data={data} error={error} loader={loader} dispatch={dispatch} page={increasepagenum}/>
        </>
    )
}

export default History
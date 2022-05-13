import React from 'react'
import { useLocation } from 'react-router'
import Preloader from "../components/preloader";
import { useSelector } from 'react-redux';


function useId() {
    const location = useLocation()
   const path = location.pathname
  const pathid = path.split('/')[2]
  const preloader = useSelector(state => state.Photodetails.isloading)


  return [pathid,Preloader,preloader]
}

export default useId

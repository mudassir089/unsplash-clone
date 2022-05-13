import axios from "axios"
import {useRef,useCallback} from 'react'

export const CALL_API = async (apiurl,dispatchfunc,dis,error,loading) => {

    const source = axios.CancelToken.source()

    try{
        dis(loading(true))
        const response = await axios.get(apiurl,{
            cancelToken:source.token  
        })
        console.log(response)
        dis(dispatchfunc(response.data))
        dis(loading(false))

    }catch(err){
        console.log(err)
        dis(loading(false))
        dis(error(true))
    }
}

export const SEARCH_CALL_API = async (apiurl,dispatchfunc,dis,error,loading) => {
    try{
        dis(loading(true))
        const response = await axios.get(apiurl)
        console.log(response)
        dis(dispatchfunc(response.data.results))
        dis(loading(false))

    }catch(err){
        console.log(err)
        dis(loading(false))
        dis(error(true))
    }
}




export function useInfinitescroll(dis,loader,pageinc){


    const observer = useRef()
    const lastdivref = useCallback(node => {
        if(loader) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                console.log('visible')
                dis(pageinc())
            }
        })
      if(node) observer.current.observe(node)
    },[loader])
    

    return [lastdivref]
  

}

const key = 'AHH-MR0CKwEwJH8G44L9pEHhlrFzu2SSzyHCo4zQ8Fw'


const baseurl = `https://api.unsplash.com/`

export const homepageurl = (pagenum) => `${baseurl}photos?client_id=${key}&per_page=30&page=${pagenum}`
export const wallpaperpageurl = (pagenum) => `${baseurl}topics/wallpapers/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const fashionpageurl = (pagenum) => `${baseurl}topics/fashion/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const threedpageurl = (pagenum) => `${baseurl}topics/3d-renders/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const foodanddrinkpageurl = (pagenum) => `${baseurl}topics/food-drink/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const historypageurl = (pagenum) => `${baseurl}topics/history/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const architecturepageurl = (pagenum) => `${baseurl}topics/architecture/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const naturepageurl = (pagenum) => `${baseurl}topics/nature/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const filmpageurl = (pagenum) => `${baseurl}topics/film/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const texturespageurl = (pagenum) => `${baseurl}topics/textures-patterns/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const streetpageurl = (pagenum) => `${baseurl}topics/street-photography/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const experimentalpageurl = (pagenum) => `${baseurl}topics/experimental/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const artspageurl = (pagenum) => `${baseurl}topics/arts-culture/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const interiorspageurl = (pagenum) => `${baseurl}topics/interiors/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const peoplepageurl = (pagenum) => `${baseurl}topics/people/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const travelpageurl = (pagenum) => `${baseurl}topics/travel/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const animalspageurl = (pagenum) => `${baseurl}topics/animals/photos?client_id=${key}&per_page=30&page=${pagenum}`
export const searchpageurl = (pagenum,query) => `${baseurl}/search/photos?query=${query}&client_id=${key}&per_page=30&page=${pagenum}`
export const photodetailsurl = (id) => `${baseurl}photos/${id}?client_id=${key}`


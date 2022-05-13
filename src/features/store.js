import {configureStore} from '@reduxjs/toolkit'
import Imagedataslice from '../features/data'
import WallpaperdataSlice from '../features/wallpaperdata'
import fashiondata from './fashiondata'
import threeddata from './threeddata'
import fooddata from './fooddata'
import historydata from './historydata'
import architecturedata from './architecturedata'
import naturedata from './naturedata'
import filmdata from './filmdata'
import texturesdata from './texturesdata'
import streetdata from './streetdata'
import experimentaldata from './experimentaldata'
import interiorsdata from './interiorsdata'
import artsdata from './artsdata'
import peopledata from './peopledata'
import animaldata from './animaldata'
import traveldata from './traveldata'
import searchdata from './searchdata'
import photodetailsdata from './photodetailsdata'
export const store = configureStore({
    reducer:{
      Imagedata:Imagedataslice,
      WallpaperImagedata:WallpaperdataSlice,
      FashionImagedata:fashiondata,
      ThreedImagedata:threeddata,
      FoodImagedata:fooddata,
      HistoryImagedata:historydata,
      ArchitectureImagedata:architecturedata,
      NatureImagedata:naturedata,
      FilmImagedata:filmdata,
      TextureImagedata:texturesdata,
      StreetImagedata:streetdata,
      ExperimentalImagedata:experimentaldata,
      InteriorsImagedata:interiorsdata,
      ArtsImagedata:artsdata,
      AnimalImagedata:animaldata,
      TravelImagedata:traveldata,
      PeopleImagedata:peopledata,
      SearchedImagedata:searchdata,
      Photodetails:photodetailsdata
    }
})
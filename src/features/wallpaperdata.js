import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    wallpaper:'',
    page:1,
    isloading:false,
    error:false
}

const Wallpaperdataslice = createSlice({
    name:"wallpaperdata",
    initialState,
    reducers:{
        getwallpaperpagedata: (state,{payload}) => {
            state.wallpaper = [...state.wallpaper,...payload]
        },
        increasepagenum:(state,{payload}) => {
            state.page++
        },
        loadhandling:(state,{payload}) => {
            state.isloading = payload
        },
        errorhandling:(state,{payload}) => {
            state.error = payload
        
        }
    }
})

export const {getwallpaperpagedata,increasepagenum,loadhandling,errorhandling} = Wallpaperdataslice.actions
export default Wallpaperdataslice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    home:'',
    page:1,
    isloading:false,
    error:false
}

const Imagedataslice = createSlice({
    name:"imagedata",
    initialState,
    reducers:{
        gethomepagedata: (state,{payload}) => {
            state.home = [...state.home,...payload]
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

export const {gethomepagedata,increasepagenum,loadhandling,errorhandling} = Imagedataslice.actions
export default Imagedataslice.reducer
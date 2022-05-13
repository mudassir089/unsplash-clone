import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    interiors:'',
    page:1,
    isloading:false,
    error:false
}

const Interiorsdataslice = createSlice({
    name:"interiorsdata",
    initialState,
    reducers:{
        getinteriorspagedata: (state,{payload}) => {
            state.interiors = [...state.interiors,...payload]
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

export const {getinteriorspagedata,increasepagenum,loadhandling,errorhandling} = Interiorsdataslice.actions
export default Interiorsdataslice.reducer
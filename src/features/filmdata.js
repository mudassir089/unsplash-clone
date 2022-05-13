import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    film:'',
    page:1,
    isloading:false,
    error:false
}

const Filmdataslice = createSlice({
    name:"filmdata",
    initialState,
    reducers:{
        getfilmpagedata: (state,{payload}) => {
            state.film = [...state.film,...payload]
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

export const {getfilmpagedata,increasepagenum,loadhandling,errorhandling} = Filmdataslice.actions
export default Filmdataslice.reducer
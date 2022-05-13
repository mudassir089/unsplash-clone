import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    street:'',
    page:1,
    isloading:false,
    error:false
}

const Streetdataslice = createSlice({
    name:"streetdata",
    initialState,
    reducers:{
        getstreetpagedata: (state,{payload}) => {
            state.street = [...state.street,...payload]
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

export const {getstreetpagedata,increasepagenum,loadhandling,errorhandling} = Streetdataslice.actions
export default Streetdataslice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    food:'',
    page:1,
    isloading:false,
    error:false
}

const Fooddataslice = createSlice({
    name:"fooddata",
    initialState,
    reducers:{
        getfoodpagedata: (state,{payload}) => {
            state.food = [...state.food,...payload]
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

export const {getfoodpagedata,increasepagenum,loadhandling,errorhandling} = Fooddataslice.actions
export default Fooddataslice.reducer
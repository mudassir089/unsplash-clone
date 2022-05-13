import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nature:'',
    page:1,
    isloading:false,
    error:false
}

const Naturedataslice = createSlice({
    name:"naturedata",
    initialState,
    reducers:{
        getnaturepagedata: (state,{payload}) => {
            state.nature = [...state.nature,...payload]
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

export const {getnaturepagedata,increasepagenum,loadhandling,errorhandling} = Naturedataslice.actions
export default Naturedataslice.reducer
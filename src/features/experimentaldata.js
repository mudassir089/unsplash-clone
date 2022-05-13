import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    experimental:'',
    page:1,
    isloading:false,
    error:false
}

const Experimentaldataslice = createSlice({
    name:"experimentaldata",
    initialState,
    reducers:{
        getexperimentalpagedata: (state,{payload}) => {
            state.experimental = [...state.experimental,...payload]
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

export const {getexperimentalpagedata,increasepagenum,loadhandling,errorhandling} = Experimentaldataslice.actions
export default Experimentaldataslice.reducer
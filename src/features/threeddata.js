import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    threed:'',
    page:1,
    isloading:false,
    error:false
}

const Threeddataslice = createSlice({
    name:"threeddata",
    initialState,
    reducers:{
        getthreedpagedata: (state,{payload}) => {
            state.threed = [...state.threed,...payload]
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

export const {getthreedpagedata,increasepagenum,loadhandling,errorhandling} = Threeddataslice.actions
export default Threeddataslice.reducer
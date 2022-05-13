import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    architecture:'',
    page:1,
    isloading:false,
    error:false
}

const Architecturedataslice = createSlice({
    name:"architecturedata",
    initialState,
    reducers:{
        getarchitecturepagedata: (state,{payload}) => {
            state.architecture = [...state.architecture,...payload]
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

export const {getarchitecturepagedata,increasepagenum,loadhandling,errorhandling} = Architecturedataslice.actions
export default Architecturedataslice.reducer
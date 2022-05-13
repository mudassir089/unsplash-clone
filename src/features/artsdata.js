import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    arts:'',
    page:1,
    isloading:false,
    error:false
}

const Artsdataslice = createSlice({
    name:"artsdata",
    initialState,
    reducers:{
        getartspagedata: (state,{payload}) => {
            state.arts = [...state.arts,...payload]
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

export const {getartspagedata,increasepagenum,loadhandling,errorhandling} = Artsdataslice.actions
export default Artsdataslice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    people:'',
    page:1,
    isloading:false,
    error:false
}

const Peopledataslice = createSlice({
    name:"peopledata",
    initialState,
    reducers:{
        getpeoplepagedata: (state,{payload}) => {
            state.people = [...state.people,...payload]
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

export const {getpeoplepagedata,increasepagenum,loadhandling,errorhandling} = Peopledataslice.actions
export default Peopledataslice.reducer
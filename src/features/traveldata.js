import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    travel:'',
    page:1,
    isloading:false,
    error:false
}

const Traveldataslice = createSlice({
    name:"traveldata",
    initialState,
    reducers:{
        gettravelpagedata: (state,{payload}) => {
            state.travel = [...state.travel,...payload]
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

export const {gettravelpagedata,increasepagenum,loadhandling,errorhandling} = Traveldataslice.actions
export default Traveldataslice.reducer
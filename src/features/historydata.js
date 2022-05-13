import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    history:'',
    page:1,
    isloading:false,
    error:false
}

const Historydataslice = createSlice({
    name:"historydata",
    initialState,
    reducers:{
        gethistorypagedata: (state,{payload}) => {
            state.history = [...state.history,...payload]
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

export const {gethistorypagedata,increasepagenum,loadhandling,errorhandling} = Historydataslice.actions
export default Historydataslice.reducer
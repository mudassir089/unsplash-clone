import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    fashion:'',
    page:1,
    isloading:false,
    error:false
}

const Fashiondataslice = createSlice({
    name:"fashiondata",
    initialState,
    reducers:{
        getfashionpagedata: (state,{payload}) => {
            state.fashion = [...state.fashion,...payload]
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

export const {getfashionpagedata,increasepagenum,loadhandling,errorhandling} = Fashiondataslice.actions
export default Fashiondataslice.reducer
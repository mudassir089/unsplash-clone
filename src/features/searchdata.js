import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    search:'',
    query:localStorage.getItem('query') ? localStorage.getItem('query') : '',
    page:1,
    isloading:false,
    error:false
}

const Searchdataslice = createSlice({
    name:"searchdata",
    initialState,
    reducers:{
        getsearchpagedata: (state,{payload}) => {
            state.search = [...state.search,...payload]
        },
        increasepagenum:(state,{payload}) => {
            state.page++
        },
        loadhandling:(state,{payload}) => {
            state.isloading = payload
        },
        errorhandling:(state,{payload}) => {
            state.error = payload
        
        },
        searchquery:(state,{payload}) => {
            state.query = payload
            localStorage.setItem('query',JSON.stringify(state.query))
        },
        emptyarray:(state,{payload}) => {
            if(state.query === ''){
                state.search = []
            }else{
                state.search = [...state.search]
            }
        }
    }
})

export const {emptyarray,getsearchpagedata,searchquery,increasepagenum,loadhandling,errorhandling} = Searchdataslice.actions
export default Searchdataslice.reducer
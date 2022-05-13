import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    textures:'',
    page:1,
    isloading:false,
    error:false
}

const Texturesdataslice = createSlice({
    name:"texturesdata",
    initialState,
    reducers:{
        gettexturespagedata: (state,{payload}) => {
            state.textures = [...state.textures,...payload]
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

export const {gettexturespagedata,increasepagenum,loadhandling,errorhandling} = Texturesdataslice.actions
export default Texturesdataslice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    animal:'',
    page:1,
    isloading:false,
    error:false
}

const Animaldataslice = createSlice({
    name:"animaldata",
    initialState,
    reducers:{
        getanimalpagedata: (state,{payload}) => {
            state.animal = [...state.animal,...payload]
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

export const {getanimalpagedata,increasepagenum,loadhandling,errorhandling} = Animaldataslice.actions
export default Animaldataslice.reducer
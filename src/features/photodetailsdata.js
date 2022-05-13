import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    photodetails:{},
    isloading:false,
    error:false
}

const Photodetailslice = createSlice({
    name:"detaildata",
    initialState,
    reducers:{
        getphotodetails: (state,{payload}) => {
            state.photodetails = payload
            localStorage.setItem('photo',JSON.stringify(state.photodetails))
        },
        loadhandling:(state,{payload}) => {
            state.isloading = payload
        },
        errorhandling:(state,{payload}) => {
            state.error = payload
        
        },
        gettinglocalstorage:(state,{payload}) => {
            state.photodetails = localStorage.getItem(JSON.parse('photo'))
        }
    }
})

export const {getphotodetails,loadhandling,errorhandling,gettinglocalstorage} = Photodetailslice.actions
export default Photodetailslice.reducer
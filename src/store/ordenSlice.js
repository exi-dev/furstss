import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orden: {},
}

export const ordenSlice = createSlice({
    name:'orden',
    initialState,
    reducers:{
        agregarOrden(state,action){
            state.orden = action.payload
        }
    }
})

export const {agregarOrden} = ordenSlice.actions;
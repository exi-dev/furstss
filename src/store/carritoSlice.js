import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productos: [],
}

export const carritoSlice = createSlice({
    name:'carrito',
    initialState,
    reducers:{
        agregarProducto(state,action){
            state.productos.push(action.payload) 
        },
        quitarProducto(state,action) {
            const newProductos = state.productos.filter(producto => producto.id !== action.payload)
            state.productos = newProductos
        }
    }
})

export const {agregarProducto,quitarProducto} = carritoSlice.actions;
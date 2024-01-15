import { configureStore } from "@reduxjs/toolkit";
import { carritoSlice } from "./carritoSlice";
import { ordenSlice } from "./ordenSlice";

export default configureStore({
    reducer:{
        carrito:carritoSlice.reducer,
        orden:ordenSlice.reducer
    }
})
'use client'
import * as React from "react"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import CardCart from "../tarjetacarrito/tarjetaCarrito"
import { agregarOrden } from "@component/store/ordenSlice"
import Link from "next/link"



const Cart = ({carritoClick,handleCarrito}) => {

    const dispatch = useDispatch()
    
    const packageProducts = useSelector(state => state.carrito)
    console.log(packageProducts)
    

    //despacha la orden
    const enviarALaOrden =(elem)=>{
        console.log(elem)
        dispatch(agregarOrden(elem))
    }


    useEffect(()=>{
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
        console.log(carritoLS)
    },[])
    
    useEffect(()=>{
        console.log(JSON.stringify(packageProducts))
        localStorage.setItem('carrito',JSON.stringify(packageProducts))
    },[packageProducts])

  if (carritoClick){
    return (
    <div className="fondoBLureado absolute border w-screen h-screen bg-gray-600 bg-opacity-25 z-10">
        <div className="canvaso h-screen w-[500px] border bg-gray-200 shadow-md">
            <div className="cruz"><button onClick={handleCarrito}>x</button></div>
            <div className="titlelaso">
                    <div className="icono"></div>
                    <h2>mi carrito</h2>
            </div>
            { packageProducts != undefined ? packageProducts.productos.map(product=>{ return <CardCart data={product}/> }) : <div> </div>}
            <div className="botones">
               
                <Link href="/ordenes">
                    <button className="bg-black rounded-lg text-white" onClick={()=>enviarALaOrden(packageProducts.productos)}>Generar orden</button>
                </Link>
            </div>
            
        </div>
    </div>
  )
    }
}

export default Cart
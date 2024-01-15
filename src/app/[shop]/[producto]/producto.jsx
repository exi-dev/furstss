"use client"
import * as React from "react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { agregarProducto } from "@component/store/carritoSlice"
import { useState } from "react"


const Producton =  ({ product }) => {


    const [cantidadH,setCantidadH] = useState(1)
    const dispatch = useDispatch()

    //despacha el producto
    const modificar =(elem)=>{
        dispatch(agregarProducto(elem))
    }

    //Agrega Las Cantidades
    const sumarCantidades = (elemento) => {
        let nuevoElemento = elemento
        nuevoElemento.quantity = cantidadH
        console.log(elemento)
      return nuevoElemento
    }
    //agarra el metodo del despache y le pasa el producto construido
    const enviarAlCarrito =(elem)=>{
        modificar(sumarCantidades(elem))
    }


  return (
    
    <>
    <p>volver</p>
    {console.log(product)}
    <div className="3partes p-10 flex flex-col items-center h-screen">
      <div className="1 px-10 w-[1400px] border ">
          {/* {breadcrumb} */}
          <div className="imagen-y-accionables flex justify-around ">
            <div className="izq w-[600px] h-[400px] border ">
              <img src={product.images[0].src} alt="" className="object-cover overflow-hidden w-[600px] h-[400px]"/> 
            </div>
            <div className="der w-[400px] h-[300px]s border">
              <p>categoria</p>
              <p className="fontpoppins-xl">{product.name}</p>
              <h2>lo que tenes que saber de este producto</h2>
              <p>{product.short_descripion}</p>
              <button>accionables</button>
              <p className="fontpoppins-xl">{product.regular_price}</p>
              <p className="fontpoppins-xl">precio especial:{product.sale_price}</p>
              <div className="cantidad-carrito flex justify-around">
                <div className="flex justify-around w-[80px] border rounded-full font-bold">
                  <div>
                    <button onClick={() => setCantidadH(cantidadH + 1)}> + </button>
                  </div>
                  <div>
                    <p>{cantidadH}</p>
                  </div>
                  <div>
                    <button onClick={() => setCantidadH(cantidadH - 1)}> - </button>
                  </div>
                </div>
                  <button className="bg-black rounded-lg text-white" onClick={()=>enviarAlCarrito(product)}>agregar al carrito</button>
              </div>
            </div>
          </div>
      </div>
      <div className="2 w-[1400px]">
        <div>
          <p className="fontpoppins-xl">descripcion producto</p>
          <p>{product.description.slice(3,-5)}</p>

        </div>
      </div>
     {/*  <div className="3">
        <p className="fontpoppins-xl">tambien podria interesarte</p>
       {/*  {carrousel} */}
       {/* <div className="div border w-[1400px] h-[250px]"></div> */}
     {/*  </div> */} 
    </div>
  

    </>
  )
}


export default Producton

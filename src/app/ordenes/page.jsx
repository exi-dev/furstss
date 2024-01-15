'use client'

import { useState } from "react"
import { useSelector } from "react-redux"

export default function Order() {

    const ordenAmostrar = useSelector(state => state.orden)
    const pedido = ordenAmostrar.orden
    const descuento = 0
  

    const buscarTotal = (bloque) =>{
    let totalFinal = 0
    bloque.map(producto => {
             totalFinal += Number(producto.price * producto.quantity)
         })
    return totalFinal - descuento
    }

    const totaltotal = buscarTotal(pedido)
    console.log(pedido)

  return (
    <>
 
    <p>volver</p>
    <div className="flex justify-around h-screen">
      <div className="m-20 border flex flex-col">
        <div className="cuadrado-1 flex flex-col">
            <h2>su pedido ha sido recibido</h2>
            <div className="tablaso border flex w-[1400px] justify-around">
                <div className="">
                    <p>Numero de pedido</p>
                    <p>#01</p>  
                </div>
                <div className="">
                    <p>Fecha</p>
                    <p>02/12/2013</p>            
                </div>
                <div className="">
                    <p>Total</p>
                    <p>TOTAL</p>
                </div>
                <div className="">
                    <p>metodo de pago</p>
                   <p>Transferencia Bancaria</p>
                </div>
            </div>
            <div className="textoImportante">
                <p>Por favor, usa el número del pedido como referencia de pago.</p>
                <p>Tu pedido será procesado una vez que se haya recibido el importe en nuestra cuenta.</p>
                <p>Aguardamos el comprobante de pago al correo electrónico: jinkousas@gmail.com o al Whatsapp: +54 9 11 2403 5129 </p>
            </div>
        </div>
        <div className="cuadrado-2">
            <h2>nuestros datos bancarios</h2>
            <div className="tablaso2 border flex w-[1400px] justify-around">
                <div className="1">
                    <p>Banco</p>
                    <p>Banco</p>
                   
                </div>
                <div className="2">
                    <p>numero de cuenta</p>
                    <p>numero de cuenta</p>
                </div>
                <div className="3">
                    <p>codigo de clasificacion</p>
                    <p>codigo de clasificacion</p>
                </div>
                <div className="4">
                    <p>cbu/iban</p>
                    <p>cbu/iban</p>
                </div>
            </div>
        </div>
        <div className="cuadrado-3">
            <h2>Detalle del pedido</h2>
            <div className="">
                <div className="tablaso2 border flex flex-col w-[1400px] ">
                    <div className="flex justify-around">
                        <div className="inline-block">
                            <p>Producto</p>
                        </div>
                        <div className="inline-block">
                            <p>Total</p>
                        </div>
                    </div>
                    {pedido.map(producto => {
                        return <div className="flex justify-around">
                            <div className="">
                                <p >{producto.name} x{producto.quantity}</p>
                            </div>
                        <div className="">
                            <p>{producto.price * producto.quantity}</p>
                        </div>
                    </div>
                    })}
                    <div className="flex justify-around">
                        <div className="">
                            <p>envio</p>
                        </div>
                        <div className="">
                            <p>envio gratuito</p>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="inline-block">
                            <p>Metodo de pago</p>
                        </div>
                        <div className="flex justify-around">
                            <p>transferencia bancaria</p>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="inline-block">
                            <p>Total</p>
                        </div>
                        <div className="inline-block">
                            <p>{totaltotal}</p> 
                        </div>
                    </div>
                </div>
            </div>
          
            </div>
        </div>
        </div>

    </>
  )
}

'use client'
import * as React from "react"
import Card from "@component/components/card/card"
import { fetchWooCommerceProducts } from "../../../../utils/wooCommerceApi";
import { useRouter } from "next/navigation";

const Search = async ({params}) => {

  const router = useRouter()
  const productosTotal = await fetchWooCommerceProducts();

  const filtrarPorBusqueda  = (prod) =>{
    let productosfiltrados = []
    prod.data.map((product)=>{
      if (product.name == params.query) {
        productosfiltrados.push(product)
      }
    })
    return productosfiltrados
  }

  let productoss = filtrarPorBusqueda (productosTotal)

  let urlimagen = "images/" + params.search + ".png"
  let cantidadDeProductos = productosTotal.data.length

  return (
     <>
     <div className="h-full">
        <div className="bannner w-full h-[500px] ">
            {<img src={urlimagen} className="object-cover w-full h-[500px]" />}
        </div>
        <div className="containerder mx-10 my-5 flex">
            <div className=" w-60 border h-60 mr-6">
              <p>{cantidadDeProductos} resultados </p>
              <h1>{params.shop}</h1>
                {/* {breadcrumb}*/}
                <p>Orden:
                <select name="select">
                  <option value="Menor precio" selected>Menor Precio</option>
                  <option value="Mayor Precio">Mayor Precio</option>
                </select>
                </p>
            </div>
            <div className="productos flex ">
                { productoss.map((products) => {
                    return <button onClick= {()=> router.push("/shop/"+product.id)}> 
                              <Card product={products} key={products.id}/>
                            </button>
                }) }
            </div>
        </div>

     </div>
    </>
  )
}


export default Search

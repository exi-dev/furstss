
import * as React from "react"
import Card from "@component/components/card/card"
import { fetchWooCommerceProducts } from "../../../utils/wooCommerceApi"
import Link from "next/link"

const Shop = async ({params}) => {

  const productosTotal = await fetchWooCommerceProducts();

  const filtrarCategorias  = (prod) =>{
    let productosfiltrados = []
    prod.data.map((product)=>{
      if (product.categories[0].name == params.shop) {
        productosfiltrados.push(product)
      }
    })
    return productosfiltrados
  }

  let productoss = filtrarCategorias(productosTotal)

  let urlimagen = "images/" + params.shop + ".png"
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
                    return <Link href= {"shop"+"/"+products.id}> 
                    <Card product={products} key={products.id} />
                    </Link>
                }) }
            </div>
        </div>

     </div>
    </>
  )
}


export default Shop

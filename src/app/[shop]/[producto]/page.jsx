import * as React from "react"
import { fetchWooCommerceProduct } from "../../../../utils/wooCommerceApi"
import Producton from "./producto"

const Productoso = async ({ params }) => {
  const producto = await fetchWooCommerceProduct(params.producto);
  const product = producto.data

  return (
    <>
      <Producton product={product}/>
    </>
  )
}

export default Productoso

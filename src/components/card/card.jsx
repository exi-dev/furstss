import * as React from "react"
import Link from "next/link"



const Card = ({ product }) => {
  return (
    <div className=" border w-[340px] h-[300px] m-1 p-5 rounded-lg shadow-md">
        <div className="agruparon flex flex-col items-center">
          <div className="image-containedor w-[140px] h-[150px] ">
            {/* {console.log(product.images[0])} */}
            <img src={product.images[0].src} alt={product.images[0].src} className="pbject-cover h-[150px] w-[150px]" />
          </div>
          <p className="mt-2">{product.name}</p>
          <div className=" block w-[200px] bg-black rounded-lg text-white text-center mt-2">
            <p> ${product.regular_price} </p> 
          </div>
        </div>
    </div>
    
  )
}

export default Card
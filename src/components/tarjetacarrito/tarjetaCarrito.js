import * as React from "react"
import { useDispatch } from "react-redux"
import { quitarProducto } from "@component/store/carritoSlice"

const CardCart = ({data}) => {

    const dispatch = useDispatch()

    const modificar =(id)=>{
        dispatch(quitarProducto(id))
    }

    return (
    <>  
            <div className="middle border bg-white rounded-lg shadow-lg m-3">
                <div className="datos flex justify-around">
                    <div className="titulo">{data.name}</div>
                    <div className="cantidad">cantidad:{data.quantity}</div> 
                    <div className="precio">precio:{data.price}</div>
                </div>
                <div className="tachito" onClick={()=>modificar(data.id)}><button> Eliminar </button></div>
            </div>
            
    </>
  )
  
}

export default CardCart
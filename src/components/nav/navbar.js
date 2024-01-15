'use client'
import * as React from "react"
import Link from "next/link"
import SearchBar from "../searchBar/searchbar"
import Cart from "../carrito/carrito"
import { useState } from "react"


const NavBar = () => {
  const [open, setopen] = useState(false)

  const handleCarrito = () => {
    if (open === false) {
    setopen(true)
  }
  if (open === true) {
    setopen(false)
  }
}

  return (
    <>
      <Cart carritoClick={open} handleCarrito={handleCarrito}/>
      <nav>
      <div className=" containerPrincipal bg-black text-white">
        <div className="duo-container p-5">
          <div className="fontpoppins-m superior flex justify-between my-3">
            <div className="logo ml-20">
              <Link href="/">
                <img src="/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="buscador">
                <SearchBar/>
            </div>
            <div className="grupo-izq p-1 flex mr-20 ">
              <div className="FaQ flex flex-col items-stretch ">
                <Link href="/faq">
                  <div >
                    <img src="/images/preguntas.svg" alt="" className="w-6 h-6" />
                  </div>
                  <div>
                    <p>preguntas</p>
                  </div>
                </Link>
              </div>
              <div className="carrito" onClick={handleCarrito}>
                <img src="/images/carrito.svg" alt="" />
                <p>carrito</p>
              </div>
            </div>
        </div>
        <div className="inferior fontpoppins-l">
          <ul className=" flex justify-around ">
            <li> <Link href= "/auriculares">Auriculares Bluetooth</Link> </li>
            <li><Link href="/smartwatch">Smartwach</Link></li>
            <li><Link href="/fundas">Fundas para celular</Link></li>
            <li><Link href="/protectores">Protector de pantalla</Link> </li>
            <li><Link href="/adaptadores">Adaptadores y cables</Link></li>
          </ul>
        </div>
      </div>
      </div>

    </nav>
    </>
    
  )
}

export default NavBar


'use client'
import * as React from "react"

const Footero = () => {
  return (
    
    <footer className="flex flex-col text-center">
        <div className="up flex bg-gray-300 justify-around py-10 " >
               
               
               
               
               
               
               
               
               
               
                <div className="1  w-60 justify-items-center justify-center">
                    <div className="flex flex-col">
                        <div className="imagess w-46 self-center">
                            <img src="/images/platinum.png" alt="" />
                        </div>
                        <div>
                            <h2>Mercado libre Platinum</h2>
                            <p>Encontranos en MercadoLibre como furst</p>
                        </div>
                    </div>
                </div>



                <div className="2 w-60 justify-items-center justify-center ">
                <div className="flex flex-col">
                        <div className="imagess w-46 self-center">
                            <img src="/images/correo.png" alt="" />
                           
                        </div>
                        <div>

                            <h2>Envios a TODO el pais</h2>
                            <p>Hacé tu compra y recibila donde quieras o retirala en nuestra sucursal.</p>
                        </div>
                    </div>


                </div>















                <div className="3  w-60 justify-items-center justify-center">
                    <div className="flex flex-col">
                        <div className="imagess w-24 self-center">
                        <img src="/images/motito.svg" alt="" />
                        </div>
                        <div>
                        <h2>Envíos a AMBA en el día</h2>
                        <p>Envíos Express a AMBA, ¡recibí tu compra el mismo día!</p>
                        </div>
                    </div>
                </div>


            

                
                <div className="4  w-60 justify-items-center justify-center">
                    <div className="flex flex-col">
                        <div className="imagess w-70 self-center">
                        <img src="/images/logo.svg" alt="" className="w-12"/>
                        </div>
                        <div>
                        <h2>Sucursal</h2>
                    <p>San Martín 575 5° B Microcentro L a V: de 10 a 14:30 y de 15:30 a 18:00 hs Teléfono: 11 2403 5129 Mail: jinkousas@gmail.com</p>
                        </div>
                    </div>
                </div>


                
        </div>
        <div className="down bg-stone-500 flex justify-around text-white p-2">
            <div className="textoide m-4">
                <p>Copyright © 2023 Furst.</p>
                <p>Todos los derechos reservados.</p>
                <p>Jinkou SAS - CUIT 30-71676919-0</p>
            </div>
        </div>
    </footer>
  )
}

export default Footero



export default function Home() {
  return (
    <>
        
    <main className="w-screen bg-slate-50 mb-16">
      <div className="containedor flex justify-around fonditoPrincipal bg-cover">
        <header className="  h-screen flex flex-col text-white justify-around ">
          <div className="superior h-60 w-[1600px]  flex justify-between">
            <div className="izquierda ">
              <h1 className='fontpoppins-l text-6xl'>Sitio de ventas mayoristas</h1>
              <h2 className='fontpoppins-l text-4xl text-blue-100 my-8'>de tecnologias y accesorios</h2>

              <div className="cuadrado-fachero w-96 text-2xl  rounded-md bg-gradient-to-r from-slate-800 to-slate-600 text-center p-4">
                <p className='fontpoppins-l'> Minimo de compra $30000</p>

              </div>
            </div>
            <div className="derecha h-[500px] w-[500px]">
              <img src="./images/relojinicio2.png" alt="" className='object-cover'/>
            </div>
          </div>
          <div className="inferior ">
            <p>Para compras minoristas encontranos en www.furst.ar</p>
          </div>
        </header>

      </div>




      <section className="info-y-destacadas ">
        <div className="tres-rectangulos h-60 flex justify-around p-3 mt-12 mb-12">
          <div className="01 border rounded-lg flex p-2 w-[600px] h-[200px] justify-around p-5 ">
            <div className="izq">
              <h2 className = "font-bold text-2xl">Somos mercado Libre platinium</h2>
              <p className = " font-semibold text-xl mt-2 text-sky-800">Encontranos como Furst</p>
            </div>
            <div className="der">
              <img src="./images/platinum.png" alt="" />
            </div>
          </div>
          <div className="02 border rounded-lg flex p-2 w-[600px] h-[200px] justify-around p-5 ">
            <div className="izq">
              <h2 className = "font-bold text-2xl">Medios de Pago</h2>
              <p className = "font-semibold text-xl mt-2 text-sky-800">Transferencia y efectivo</p>
            </div>
            <div className="der ">
              <img src="./images/pagos.svg" alt="" />
            </div>
          </div>
          <div className="03 border rounded-lg flex p-2 w-[600px] h-[200px] justify-around p-5 ">
            <div className="izq">
              <h2 className = "font-bold text-2xl">Envios a todo el pais</h2>
              <p className = " font-semibold text-xl mt-2 text-sky-800">Y envios express a amba</p>
            </div>
            <div className="der">
              <img src="./images/camion.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="destacadas">
         {/*  <p className="fontpoppins-l text-2xl">aprovecha las ofertas destacadas</p> */}
          {/* {carrousel-ofertas-destacadas} */}
        </div>

      </section>
      <section className="imagen-fachera h-[450px] bg-black text-white flex flex-col justify-center">
        <div className="duo flex justify-around">
          <div className="conteinerimagenn w-[300px]  h-[300px] relative bottom-16 ">
            <img src="./images/reloj.png" alt="" />
          </div>
          <div className="containerTexxxto fontpoppins-xl text-4xl flex flex-col justify-center">
            <h2 className=''>Los mejores productos</h2>
            <h2 className='mt-5 text-blue-100'>Al mejor precio</h2>
          </div>
        </div>
      </section>
      <div className="container-categorias-destacados  ">
        <div className="categorias mt-10 ">
          <div className="uppp">
            <h3 className="font-bold text-3xl p-6 ml-20 ">Conoce nuestra categorias</h3>
          </div>
          <div className="flex justify-around">
            <div className="downnn w-[1600px] h-[800px] grid grid-col-2 grid-rows-6 gap-2">
              <div className="Auriculares-bluetooh row-start-1 row-end-3 overflow-hidden ">
                <p className='absolute font-bold text-2xl mt-4 ml-4'>Auriculares Bluetooh</p>
                <img src="./images/auris.png" alt="" className=" w-full h-full object-cover" />
              </div>
              <div className="auriculares-bluetooh row-start-3 row-end-5 overflow-hidden ">
                <p className='absolute font-bold text-2xl mt-4 ml-4'>SmartWatch</p>
                <img src="./images/smartwatchcat.png" alt="" className=" w-full h-full object-cover" />
              </div>
              <div className="auriculares-bluetooh row-start-5 row-end-7 overflow-hidden ">
                <p className='absolute font-bold text-2xl mt-4 ml-4'>Fundas para celular</p>
                <img src="./images/fundascat.png" alt="" className=" w-full h-full object-cover" />
              </div>
              <div className="auriculares-bluetooh row-start-1 row-end-4 overflow-hidden ">
                <p className='absolute font-bold text-2xl mt-4 ml-4'>Protector de pantalla</p>
                <img src="./images/proteccat.png" alt=""  className=" w-full h-full object-cover"/>
              </div>
              <div className="auriculares-bluetooh row-start-4 row-end-7 overflow-hidden ">
                <p className='absolute font-bold text-2xl mt-4 ml-4'>Adaptadores y cables</p>
                <img src="./images/adaptacat.png" alt="" className=" w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
        <div className="destacados">
          <div className="up fontpoppins-l text-2xl">
            {/* <h3>productos destacados</h3> */}
          </div>
          <div className="down">
            {/* {carrousel} */}
          </div>
        </div>
      </div>
      
    </main>
   
    </>
  )
}

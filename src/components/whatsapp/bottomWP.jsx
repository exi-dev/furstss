import * as React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"

const BottomWP = () => {

    return (
    <>  
            <div className=" ">
                <div className=" w-[65px] h-[65px] block fixed bottom-10 right-10 text-green-500 text-7xl">
                    <Link href="https://wa.me/5491124035129" >
                        <FontAwesomeIcon icon={faSquareWhatsapp} />
                    </Link>
                </div>
            </div>
            
    </>
  )
  
}
export default BottomWP
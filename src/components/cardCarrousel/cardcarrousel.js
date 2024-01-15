import * as React from "react"
import Link from "next/link"
import Card from "../card/card"






const CardCarrousel = ({related}) => {
  return (
    <>
    <div className="w-[1400px]">
        <div className="flex ">
            <Card product={}></Card>
            <Card product={}></Card>
            <Card product={}></Card>
            <Card product={}></Card>
        </div>
    </div>
    </>
    
  )
}

export default CardCarrousel
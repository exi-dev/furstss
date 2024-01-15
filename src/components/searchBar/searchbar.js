'use client'
import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const SearchBar = () => {

    const [urlname, SetUrlName] = useState()

    let url = "/search/" + urlname

    console.log(url)

    const handleChange = (event) => {
        const inputValue = event.target.value
        SetUrlName(inputValue)
    }

  return (
    <div className="flex items-center w-[600px] h-[38px] mx-auto bg-black rounded-2xl border " x-data="{ search: '' } ">
        <div className="w-full">
            <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none bg-black text-white "
                placeholder="Buscar" x-model="search" onChange={event =>handleChange(event)}/> 
        </div>
        <div>
            <Link href={url}>
            <button type="submit" className="flex items-center bg-gray-500 justify-center w-12 h-[37px] text-white rounded-r-2xl">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            </Link>
        
        </div>
    </div>
   
    )
}

export default SearchBar
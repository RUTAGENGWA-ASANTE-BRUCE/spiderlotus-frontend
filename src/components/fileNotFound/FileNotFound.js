import React from 'react'
import {Link} from "react-router-dom"
function FileNotFound() {
  return (
    <div className="flex flex-col w-fit m-auto mt-10 mb-[233px]">
       <Link to={"/"}>
          <img
            src="/logo4.png"
            alt=""
            className=" h-12  sm:h-12 md:h-14 xl:h-20 p-1 border-2  object-contain border-opacity-0  border-black hover:border-opacity-100 cursor-pointer"
          />
        </Link>

        <h5 className="text-xl font-bold mt-5">Sorry, the file you requested doen't exist</h5>
        <h5 className="text-sm  mt-5 ml-24">Make sure that you have correct URL.</h5>
        
    </div>
  )
}

export default FileNotFound
import React from 'react'
import "../../App.css"
function ProductLoader() {
  return (
    <div className="  sm:m-0 m-auto ">
        <div className="p-1 bg-white mt-5 rounded-sm w-64 h-80 ">
          <div className=" h-52 w-60  p-2 rounded-sm ml-1  skeleton">
            <div className="h-48 w-56 " />
          </div>
          <p className="h-5 skeleton ml-1 w-40 mt-2"></p>
          {/**less ten 10 words */}
          <p className="w-32 skeleton h-5 ml-1 mt-2"></p>
        </div>
    </div>
  )
}

export default ProductLoader
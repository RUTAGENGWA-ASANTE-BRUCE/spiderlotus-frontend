import React from 'react'
import "../../App.css"

function CategoryLoader() {
  return (
    <div
          className={` flex flex-col w-fit h-fit p-3 bg-white`}
        >
                    <h1 className="   h-5 skeleton w-20"></h1>
                <div className="flex flex-col mt-5">
                    <h1 className="   h-5 skeleton w-44 mt-1"></h1>
                    <h1 className="   h-5 skeleton w-44 mt-1"></h1>
                    <h1 className="   h-5 skeleton w-44 mt-1"></h1>
                    <h1 className="   h-5 skeleton w-44 mt-1"></h1>
                    <h1 className="   h-5 skeleton w-44 mt-1"></h1>
              </div>
     
        </div>
  )
}

export default CategoryLoader
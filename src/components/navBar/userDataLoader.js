import React from 'react'
import "../../App.css"
function UserDataLoader() {
  return (
    <button
    className="flex flex-row h-12 px-1 border-2   border-opacity-0 hover:border-opacity-100  border-white "
  >  
    <div
      className=" rounded-full h-7 md:h-10 mt-2 md:mt-0.5 w-7   md:w-10 skeleton"
    />
    <h5 className=" w-16 md:w-28 ml-1 mt-3 truncate h-5 skeleton"></h5>
  </button>
  )
}

export default UserDataLoader
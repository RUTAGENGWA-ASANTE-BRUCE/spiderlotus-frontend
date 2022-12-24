import React from "react"

function OneNotificationLOader(){
    return(
    <div className="flex flex-col md:flex-row w-5/6 justify-between m-auto py-3.5 px-2 border-2  border-gray-500 my-2">
           <div className="flex flex-row  w-full">
               <div className="w-10 h-10 rounded-full  skeleton"  />
               <p className="ml-3   w-full mt-2 h-7 rounded-md skeleton"></p>
           </div>
           <span className=" ml-1 flex h-5 w-20 skeleton mt-3 rounded-md"></span>
    </div>
    )
}


export default OneNotificationLOader;
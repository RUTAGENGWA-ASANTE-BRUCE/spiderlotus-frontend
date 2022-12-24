import React from "react";
import "../../App.css"

function OneOrderLoader() {
 
  return (
    <div className=" flex flex-col md:flex-row justify-between  border-b cursor-pointer   py-2 pl-3 bg-white  pr-2">
      <h1 className="text-sm font-semibold mt-2  md:w-48 truncate flex flex-row h-5 rounded-md skeleton"></h1>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  mt-2 ">
        <div className="md:ml-0  rounded-full h-5 w-5 skeleton" />
        <h5 className=" h-5 skeleton ml-1 w-32 md:w-24 rounded-md  "></h5>
      </div>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col md:mt-0 mt-2">
      <h5 className="text-sm text-black w-32 md:w-24  truncate ">
        <span className="flex h-5 w-20 skeleton rounded-md"></span><br/>
        <span className="flex h-5 mt-1 rounded-md w-20 skeleton"></span>
        </h5>
      
      </div>    
      
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col  md:mt-0 mt-2">
        <h5 className="text-sm text-black w-32 md:w-24  truncate ">
        <span className="flex h-5 w-20 skeleton rounded-md"></span><br/>
        <span className="flex h-5 w-20 skeleton mt-1 rounded-md"></span>
        </h5>
      
      </div>
      <h5 className="h-5 rounded-md skeleton mt-2 md:mx-2 xl:mx-0 mx-0 md:w-24 flex md:flex-col sm:flex-row"></h5>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  md:mt-0 mt-2">
      <h5 className={`h-7 w-24  skeleton mt-1.5 rounded-2xl px-2 flex flex-row md:flex-col `}></h5>
      </div>
    </div>
  );
}

export default OneOrderLoader;

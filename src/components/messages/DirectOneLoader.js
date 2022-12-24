import React, { useState, useEffect } from "react";
import userResources from "../dbResources/axios";
import "../../App.css"

function DirectOneLoader() {
  return (
    <div
      className="flex flex-row text-[12px] xl:text-sm  mr-2 my-1 hover:cursor-pointer rounded-md py-1 pl-0.5 w-[85%] xl:w-[90%]   hover:border-black  border-2 border-white">
      <div className="flex flex-row w-full">
        <div className="h-8 w-8 rounded-full skeleton mt-1" />
        <div className="flex flex-col  w-full ml-1 ">
          <h1 className="w-20 h-5 skeleton mb-1 rounded-md"></h1>
          <div className="flex flex-row w-full   justify-between">
          <h1 className="w-[70%] h-5 skeleton  rounded-md"></h1>
          <h1 className="w-12 h-5  skeleton rounded-md"></h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default DirectOneLoader;

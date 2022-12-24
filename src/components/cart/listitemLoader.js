import React, { useState } from "react";
import Plus from "@heroicons/react/solid/PlusIcon";
import Minus from "@heroicons/react/solid/MinusIcon";
import RightIcon from "@material-ui/icons/ArrowRightAlt"
import userResources from "../dbResources/axios";
function ListItemLoader() {

  return (
    <div className="flex flex-row  mt-3   border w-52 sm:w-[465px]  md:w-[90%] xl:w-[75%] scrollbar-hide overflow-x-scroll  h-20 sm:justify-between p-5 pb-2 bg-white">
      <div className="flex flex-row  ">
        <div className="w-14 h-14 -mt-3 skeleton">
        </div>
        <div className="flex flex-col ml-2  -mt-3">
          <p className="text-black h-3 rounded-md skeleton font-semibold w-32  truncate ">
          </p>
          <p className="text-zinc-500 text-xs h-3 rounded-md skeleton truncate mt-2 w-32">
          </p>
        </div>
      </div>
      <p className="flex flex-row ml-5 sm:ml-0   border h-7 w-20  skeleton  px-0.5 rounded-md">
       
      </p>
      <p className="ml-5 sm:ml-0 h-7 w-20  skeleton rounded-md"></p>
      <div className="ml-5 sm:ml-0 flex flex-col -mt-2">
        <h1 className="h-7 w-20 skeleton rounded-md"></h1>
        <h1
          className=" my-2 w-20 h-7 skeleton rounded-md"
         
        >
        </h1>
        <h1
          className=" w-20 h-7 skeleton rounded-md"
        >
        </h1>
      </div>
 
    </div>
  );
}
export default ListItemLoader;

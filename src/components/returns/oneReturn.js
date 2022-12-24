import React from "react"
import CheckIcon from "@material-ui/icons/Check"

function OneReturn(){
    return(
      <div className=" text-[14px] md:text-base flex flex-col md:flex-row justify-between  border-b cursor-pointer   py-2 pl-3 bg-white  hover:bg-gray-200 pr-2">
      <h1 className="text-sm font-semibold mt-2  md:w-48 truncate flex flex-row"><span className="md:hidden w-16  mr-2 flex">OrderId: </span>#<span className=" w-fit truncate">65ahvfvajfvqj27</span></h1>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  mt-2 ">
         <span className="md:hidden mr-2 w-16 flex">Customer: </span>
        <img src={"avatar4.jpg"} alt="" className="md:ml-0  rounded-full h-5 w-5" />
        <h5 className="text-sm text-black ml-1 w-32 md:w-24  truncate ">Rutagengwa Bruce</h5>
      </div>
     
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col  md:mt-0 mt-2">
        <span className="md:hidden flex w-16 mr-2">Products: </span>
        <h5 className="text-sm text-black w-32 md:w-24  truncate ">
          PS4<br/>
          HP computer
        </h5>
      
      </div>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col md:mt-0 mt-2">
         <span className="md:hidden w-16 flex mr-2">revenue: </span>
        <h5 className="text-sm text-black w-32 md:w-24 truncate ">$250</h5>
      
      </div>
      <h5 className="text-sm  text-black mt-2 md:mx-2 xl:mx-0 mx-0 md:w-24 flex md:flex-col sm:flex-row whitespace-nowrap"><span className="md:hidden w-16 mr-2 flex">Date: </span>22-04-10</h5>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  md:mt-0 mt-2">
      <span className="md:hidden w-16 mr-2 ">Status: </span>
      <h5 className="text-sm text-black w-24  truncate "><CheckIcon className="text-teal-600" fontSize={"small"} /> Paid</h5>
      </div>
    </div>
    )
}

export default OneReturn;
import React from "react";

function OneOrder({
  orderId,
  customer,
  adress,
  products,
  date,
  status,
  customerImage,
}) {
  var color;
  var bg;
  if (status === "Completed") {
    color = "text-green-600";
    bg = "bg-green-100";
    console.log(status);
  }
  if (status === "Prepared") {
    color = "text-orange-600";
    bg = "bg-orange-100";
  }
  if (status === "Delivered") {
    color = "text-blue-600";
    bg = "bg-blue-100";
  }
  if (
    status !== "Completed" &&
    status !== "Prepared" &&
    status !== "Delivered"
  ) {
    color = "text-purple-600";
    bg = "bg-purple-100";
  }
  return (
    <div className=" text-[14px] md:text-base flex flex-col md:flex-row justify-between  border-b cursor-pointer   py-2 pl-3 bg-white  hover:bg-gray-200 pr-2">
      <h1 className="text-sm font-semibold mt-2  md:w-48 truncate flex flex-row"><span className="md:hidden w-16  mr-2 flex">OrderId: </span>#<span className=" w-fit truncate">{orderId}</span></h1>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  mt-2 ">
         <span className="md:hidden mr-2 w-16 flex">Customer: </span>
        <img src={customerImage} alt="" className="md:ml-0  rounded-full h-5 w-5" />
        <h5 className="text-sm text-black ml-1 w-32 md:w-24  truncate ">{customer}</h5>
      </div>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col md:mt-0 mt-2">
         <span className="md:hidden w-16 flex mr-2">Location: </span>
        <h5 className="text-sm text-black w-32 md:w-24 truncate ">{adress.country}<br /> {adress.city}</h5>
      
      </div>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0 md:flex-col  md:mt-0 mt-2">
        <span className="md:hidden flex w-16 mr-2">Products: </span>
        <h5 className="text-sm text-black w-32 md:w-24  truncate ">
          {products[1] ? products[0] + "," : products[0]}<br/>
          {products[1] ? products[1] + ",..." : ""}
        </h5>
      
      </div>
      <h5 className="text-sm  text-black mt-2 md:mx-2 xl:mx-0 mx-0 md:w-24 flex md:flex-col sm:flex-row whitespace-nowrap"><span className="md:hidden w-16 mr-2 flex">Date: </span>{date}</h5>
      <div className="flex flex-row md:mx-2 xl:mx-0 mx-0  md:mt-0 mt-2">
      <span className="md:hidden w-16 mr-2 ">Status: </span>
      <h5 className={`h-7 w-24  ${color} ${bg} mt-1.5 rounded-2xl px-2 flex flex-row md:flex-col `}><span className="m-auto">{status}</span></h5>
      </div>
    </div>
  );
}

export default OneOrder;

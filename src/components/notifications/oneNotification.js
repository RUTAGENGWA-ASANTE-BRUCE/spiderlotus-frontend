import React from "react"

function OneNotification({main1,main2,minor1,minor2,image,time,type}){
    return(type===1?
    <div className="flex flex-col md:flex-row w-5/6 justify-between m-auto py-3.5 px-2 border-2  border-gray-500 my-2">
           <div className="flex flex-row  w-full">
               <img src={image} className="w-10 h-10 rounded-full bg-red-400 object-contain" alt="" />
               <p className="ml-3 text-black   w-full mt-2"><span className="text-blue-500 font-bold">{main1}</span> {minor1}</p>
           </div>
           <p className="text-gray-400 mt-2  ml-[50px] md:ml-0">{time}</p>
    </div>:
    type===2?
     <div className="flex flex-col md:flex-row w-5/6 justify-between m-auto py-3.5 px-2 border-2  border-gray-500 my-2">
     <div className="flex flex-row  w-full">
         <img src={image} className="w-10 h-10 rounded-full bg-blue-400 object-contain" alt=""  />
         <p className="ml-3 text-black   w-full mt-2">{minor1} <span className="text-black font-bold">{main2}</span> {minor2}.</p>
     </div>
     <p className="text-gray-400 mt-2  ml-[50px] md:ml-0">{time}</p>
</div>
    :
    type===3?
    <div className="flex flex-col md:flex-row w-5/6 justify-between m-auto py-3.5 px-2 border-2  border-gray-500 my-2">
    <div className="flex flex-row  w-full">
        <img src={image} className="w-10 h-10 rounded-full bg-gray-400 object-contain" alt=""  />
        <p className="ml-3 text-black   w-full mt-2">{minor1} <span className="text-blue-500 font-bold">{main1}</span> {minor2} <span className="text-black font-bold">{main2}</span>.</p>
    </div>
    <p className="text-gray-400 mt-2  ml-[50px] md:ml-0">{time}</p>
</div>
    :
    <div className="flex flex-col md:flex-row w-5/6 justify-between m-auto py-3.5 px-2 border-2  border-gray-500 my-2">
    <div className="flex flex-row  w-ful">
        <img src={image} className="w-10 h-10 rounded-full bg-blue-400 object-contain" alt=""  />
        <p className="ml-3 text-black   w-full mt-2"><span className="text-blue-500 font-bold">{main1}</span> <span className="text-black font-bold">{main2}</span> {minor1}.</p>
    </div>
    <p className="text-gray-400 mt-2 ml-[50px] md:ml-0">{time}</p>
</div>
    )
}


export default OneNotification;
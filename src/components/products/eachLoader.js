import React from "react";
import ProductLoader from "./productLoader";
import "../../App.css";
function eachLoader() {
  return (
    <div className="flex flex-col  ml-2 ">
      <div className="flex flex-row pb-5 pt-3 md:pt-10 w-full flex-wrap justify-between xl:px-10  bg-white">
        <div className="w-80 md:w-96 md:h-96 mx-3 flex flex-col  ">
          <div className="flex xl:hidden flex-col border-b border-opacity-25 border-black pb-2">
            <h1 className=" text-black font-semibold w-[300px]  h-3 skeleton"></h1>
            <h1 className="text-black font-semibold w-[200px] mt-1 h-3 skeleton"></h1>
          </div>
          <div className="flex flex-row mt-5 xl:mt-0">
            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 skeleton"></div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 skeleton"></div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 skeleton"></div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 skeleton"></div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 skeleton"></div>
          </div>

          <div className="w-[300px] md:w-[355px] xl:w-[500px] h-[500px]  rounded-md skeleton mt-2" />
        </div>
        <div className="flex flex-col ">
          <div className="hidden xl:flex flex-col border-b border-opacity-25 border-black">
            <div className="">
              <h1 className=" text-black font-semibold w-[400px]  h-6 skeleton"></h1>
              <h1 className="h-5 w-32 skeleton mt-1"></h1>
            </div>
          </div>
          <div className="flex flex-row">
            <h1 className="h-5 w-16 skeleton mt-1"></h1>
            <h1 className=" h-5 w-20 skeleton mt-1"></h1>
          </div>
          <h1 className="text-xs md:text-[13px] xl:text-base text-black">
            <span className=" w-32 h-5 skeleton"></span>
          </h1>

          <div className="flex flex-col mt-3">
            <h1 className="h-5 w-24 skeleton"></h1>
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 mt-2">
              <div className="border  p-1 w-32 md:w-36 border-black  skeleton  border-opacity-25 h-12"></div>
              <div className="border  skeleton p-1 w-32 md:w-36 border-black   border-opacity-25 h-12"></div>
              <div className="border  skeleton p-1 w-32 md:w-36 border-black   border-opacity-25 h-12"></div>
              <div className="border  skeleton p-1 w-32 md:w-36 border-black   border-opacity-25 h-12"></div>
              <div className="border  skeleton p-1 w-32 md:w-36 border-black   border-opacity-25 h-12"></div>
              <div className="border  skeleton p-1 w-32 md:w-36 border-black   border-opacity-25 h-12"></div>
            </div>
          </div>
          <div className="flex flex-row mt-3 border-b border-dashed border-opacity-30 pb-5 border-black">
            <h1 className="h-5 w-16 skeleton"></h1>
            <div className="flex flex-col ml-2">
              <h1 className="h-5 w-24 skeleton rounded-md mt-1"></h1>
              <h1 className="h-5 w-24 skeleton rounded-md mt-1"></h1>
              <h1 className="h-5 w-16 rounded-md skeleton mt-1"></h1>
            </div>
          </div>
          <div className="flex flex-row  mt-3">
            <h1 className="w-20 h-5 skeleton rounded-md ml-2"></h1>
            <div className="flex flex-col">
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
            </div>
          </div>

          <div className="flex flex-row  mt-3">
            <h1 className="w-20 h-5 skeleton rounded-md ml-2"></h1>
            <div className="flex flex-col  text-[13px] xl:text-base mt-1">
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
              <h1 className="w-20 h-5 skeleton rounded-md ml-2 mt-1"></h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col  xl:ml-1 mt-10 xl:mt-0  ">
          <h1 className=" xl:border-0 border-b-2 border-black flex flex-row">
            <span className="h-5 w-72 rounded-md mb-1 skeleton"></span>
          </h1>
          <h1 className=" mt-1  w-40 h-5 skeleton rounded-md "></h1>

          <h1 className="w-80 h-5 skeleton rounded-md mt-1"></h1>
          <h1 className="w-80 h-5 skeleton rounded-md mt-1"></h1>
          <h1 className="w-80 h-5 skeleton rounded-md mt-1"></h1>
          <p className="flex flex-row  ml-28 border h-8 skeleton w-20  mt-3 px-0.5 rounded-md"></p>
          <button className="mt-2 skeleton w-80 rounded-2xl h-10"></button>
          <button className="mt-5 skeleton w-80 rounded-2xl h-10"></button>
          <h1 className="mt-1 w-40 h-4 skeleton rounded-md  text-sm flex flex-row"></h1>
        </div>
      </div>
      <div className="flex flex-col border-b border-black border-opacity-20 mx-3 pb-5">
        <p className="h-4 w-32 skeleton text-sm ml-6 m-3"></p>
        <div className="flex flex-wrap flex-row gap-7">
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col bg-white my-5 py-5 h-96 mr-2">
          <p className="h-7 w-20 skeleton ml-6  m-3"></p>
          <div className="flex flex-row">
            <button
              className={`w-32 h-7 skeleton ml-5 rounded-xl  border`}
            ></button>
            <button
              className={`w-32 h-7 skeleton ml-5 rounded-xl  border`}
            ></button>
          </div>
          <div className="flex flex-col mt-3 ml-5">
            <div className="flex flex-row">
              <h1 className="text-black w-[200px] h-5 skeleton md:w-[300px]   xl:w-[500px]"></h1>
              <h1 className="h-5 skeleton w-[200px] md:w-[300px]  xl:w-[500px]"></h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black w-[200px] h-5 skeleton md:w-[300px]   xl:w-[500px]"></h1>
              <h1 className="h-5 skeleton w-[200px] md:w-[300px]  xl:w-[500px]"></h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black w-[200px] h-5 skeleton md:w-[300px]   xl:w-[500px]"></h1>
              <h1 className="h-5 skeleton w-[200px] md:w-[300px]  xl:w-[500px]"></h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black w-[200px] h-5 skeleton md:w-[300px]   xl:w-[500px]"></h1>
              <h1 className="h-5 skeleton w-[200px] md:w-[300px]  xl:w-[500px]"></h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black w-[200px] h-5 skeleton md:w-[300px]   xl:w-[500px]"></h1>
              <h1 className="h-5 skeleton w-[200px] md:w-[300px]  xl:w-[500px]"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eachLoader;

import React, { useState } from "react";
import "../../App.css";
import Products from "../products/products";

const categoriesContent = require("../../arrays");

function After() {
  const [height, setHeight] = useState(0);

  return (
    <div className="flex row">
      <div
        className={`flex flex-col text-black  w-64    p-5  bg-white categoryAfter overflow-y-scroll shadow-sm shadow-zinc-500  justify-between  gap-7  border rounded-sm`}
        id="getHeight"
      >
        {" "}
        {categoriesContent.map((category) =>
          category.map((category) => (
            <h1 className="text-blue-500">
              {" "}
              {category[0]}
              <div className="text-black">
                {" "}
                {
                  /*              @ts-ignore*/
                  category[1].map((one, i) => (
                    <h1 className="text-black text-sm  hover:text-zinc-500 cursor-pointer">
                      {" "}
                      {one}{" "}
                    </h1>
                  ))
                }
              </div>{" "}
            </h1>
          ))
        )}
      </div>

      <div className="flex flex-col " id="getHeight">
        <p className="text-md mt-3 ml-20">clothes /style type</p>
        <div className="flex flex-col  bg-slate-200  p-7  ml-12 text-center hint     rounded-sm mt-2">
          <h1 className="text-black font-semibold text-2xl">
            Shop now & get 10% off your purchase + introducing
          </h1>
          <h1 className="text-black font-semibold text-2xl ml-20">
            faster shipping options at checkout!
          </h1>
        </div>

        <h1 className="font-semibold  text-2xl ml-24 mt-2">CLOTHES</h1>
        <Products />
      </div>
    </div>
  );
}

export default After;

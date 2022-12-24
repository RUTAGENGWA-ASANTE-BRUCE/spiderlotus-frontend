import React, { useContext } from "react";
import { AppContext } from "../../App";
import "../../App.css";
import { Link } from "react-router-dom";

function Single() {
  const { products,searchValue } = useContext(AppContext);
  return (
    <div className="m-2">
      <Link to={`/${products[0]["title"].replace(/ /g, "-")}`}>
        <div className="p-1 bg-white rounded-sm w-64 h-80 ">
          <div className="h-52 w-60 bg-gray-500 p-2 rounded-sm ml-1  transition duration-200 ease-in tranform hover:scale-105">
            <img src={products[0]["image"]} alt="" className="h-48 w-56" />
          </div>
          <p className="text-zinc-400 text-sm ml-1 w-60 mt-2">
            {products[0]["name"]}
          </p>
          {/**less ten 10 words */}
          <p className="font-bold text-md ml-1 mt-2">
            {products[0]["price"]}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Single;

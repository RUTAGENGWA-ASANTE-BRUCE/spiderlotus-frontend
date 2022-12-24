import React from "react";
import "../../App.css";
import { Link} from "react-router-dom";
import { products } from "../../arrays";

function SingleCustomized({ image, name, price,routeId }) {
  return (
    <div className="  sm:m-0 m-auto ">
      <Link to={`/products/${routeId}`}>
        <div className="p-1 bg-white mt-5 rounded-sm w-64 h-80 ">
          <div className=" h-52 w-60 bg-gray-500 p-2 rounded-sm ml-1   transition duration-200 ease-in tranform hover:scale-105">
            <img src={image} alt="" className="h-48 w-56 " />
          </div>
          <p className="text-zinc-400 text-sm ml-1 w-60 mt-2">{name}</p>
          {/**less ten 10 words */}
          <p className="font-bold text-md ml-1 mt-2">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default SingleCustomized;

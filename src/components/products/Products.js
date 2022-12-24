import React, { useContext } from "react";
import { AppContext } from "../../App";
import SingleCustomized from "./SingleCustomized";
import ProductLoader from "./productLoader";
function Products() {
  const { products,searchValue } = useContext(AppContext);
  return products ? (
    <div
      className={`gap-8  pb-4 flex flex-row flex-wrap pl-5 pr-5 pt-1  mt-5 ml-2 bg-gray-100 `}
    >
      {searchValue? products .filter((one, i) => {
          return one["category"] == searchValue || one.title
                .toLocaleLowerCase()
                .includes(searchValue.toString().toLowerCase());
        }).length>0 ? products .filter((one, i) => {
          return one["category"] == searchValue || one.title
                .toLocaleLowerCase()
                .includes(searchValue.toString().toLowerCase());
        }).map((one) => (
        <SingleCustomized
          image={one["image"]}
          name={one["title"]}
          price={one["price"]}
          routeId={one["id"]}/>
      )):
      <h1 className="flex flex-row ml-3 h-56">
          No resultes found for: {searchValue}
        </h1>
      :
      products.map((one) => (
        <SingleCustomized
          image={one["image"]}
          name={one["title"]}
          price={one["price"]}
          routeId={one["id"]}/>
      ))
      }
    </div>
  ) : (
    <div
      className={`gap-8  pb-4 flex flex-row flex-wrap pl-5 pr-5 pt-1  mt-5 ml-2 bg-gray-100 `}
    >
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </div>
  );
}

export default Products;

import React, { useState } from "react";
import Plus from "@heroicons/react/solid/PlusIcon";
import Minus from "@heroicons/react/solid/MinusIcon";
import RightIcon from "@material-ui/icons/ArrowRightAlt"
import userResources from "../dbResources/axios";
function ListItem({
  productName,
  image,
  description,
  price,
  quantity,
  totalCost,
  location,
  userId,
  allItems,
  setTotalItems,
  allPrice,
  setOverallPrice,
  setCartItems,
  setSavedItems
}) {
  const unitPrice = price;
  const [removed, setRemoved] = useState("no");
  const [totalPrice, setTotalPrice] = useState(totalCost);
  const [number, setNumber] = useState(quantity);

  function add() {
    setNumber(number + 1);
    setTotalPrice(totalPrice + unitPrice);
    if (location === "cart") {
      setTotalItems(allItems + 1);
      setOverallPrice(allPrice + unitPrice);
      userResources.post(`/users/${userId}`, {
        title: productName,
        description: description,
        price: price,
        image: image,
        quantity: number,
        totalPrice: totalPrice,
      });
    } else {
      userResources.post(`/users/${userId}`, {
        title: productName,
        description: description,
        price: price,
        image: image,
        quantity: number,
        totalPrice: totalPrice,
      });
    }
  }
  function remove() {
    if (location === "cart") {
      setTotalItems(allItems - quantity);
      setOverallPrice(allPrice - totalCost);
      userResources.post(`/users/${userId}`, {
        cartList: [
          {
            title: productName,
            description: description,
            price: price,
            image: image,
            quantity: number,
            totalPrice: totalPrice,
          },
        ],
      });
      setCartItems((list)=>[...list,{
        title: productName,
        price: price,
        quantity: number,
        totalPrice: totalPrice,
        description: description,
        image: image,
      }])
    } else {
      userResources.post(`/users/${userId}`, {
        savedList: [
          {
            title: productName,
            description: description,
            price: price,
            image: image,
            quantity: number,
            totalPrice: totalPrice,
          },
        ],
      });
      setSavedItems((list)=>[...list,{
        title: productName,
        price: price,
        quantity: number,
        totalPrice: totalPrice,
        description: description,
        image: image,
      }])
    }
    setRemoved("yes");
  }
  function minus() {
    if (number > 0) {
      setNumber(number - 1);
      setTotalPrice(totalPrice - unitPrice);

      if (location === "cart") {
        setTotalItems(allItems - 1);
        setOverallPrice(allPrice - unitPrice);
        userResources.post(`/users/${userId}`, {
          cartList: [
            {
              title: productName,
              price: unitPrice,
              quantity: number,
              totalPrice: totalPrice,
              description: description,
              image: image,
            },
          ],
        });
      } else {
        userResources.post(`/users/${userId}`, {
          savedList: [
            {
              title: productName,
              price: unitPrice,
              quantity: number,
              totalPrice: totalPrice,
              description: description,
              image: image,
            },
          ],
        });
      }
    }
  }
  return removed === "no" ? (
    <div className="flex flex-row  mt-3   border w-52 sm:w-[465px]  md:w-[90%] xl:w-[75%] scrollbar-hide overflow-x-scroll whitespace-nowrap h-fit sm:justify-between p-5 pb-2 bg-white" id="scrollDiv">
    {/* <div className='absolute bg-gradient-to-l from-[#0c242d] left-[279px] h-20 bottom-2 w-8 flex  '/> */}
      <div className="flex flex-row  ">
        <div className="w-14 h-14 -mt-3">
          <img src={image} alt="" className="h-14 w-14" />
        </div>
        <div className="flex flex-col  -mt-2">
          <p className="text-black text-xs font-semibold w-32  truncate ">
            {productName}
          </p>
          <p className="text-zinc-500 text-xs  truncate w-32">
            {description}
          </p>
       {/* <button className="" onClick={()=>document.getElementById("scrollDiv").scrollLeft=20}><RightIcon className="text-green-400 flex sm :hidden hover:text-green-500" fontSize="large"/></button> */}
        </div>
      </div>
      <p className="flex flex-row ml-5 sm:ml-0  border h-7  text-center  px-0.5 rounded-md">
        <Plus className="h-5 mt-1  cursor-pointer" onClick={add} />
        <span className="w-10  h-3 text-center text-md">{number}</span>{" "}
        <Minus className="h-6  cursor-pointer" onClick={minus} />
      </p>
      <p className="ml-5 sm:ml-0 text-xs text-black">{unitPrice}</p>
      <div className="ml-5 sm:ml-0 flex flex-col -mt-2">
        <h1 className="text-black text-xs font-semibold">{totalPrice}</h1>
        <h1
          className="text-green-500 my-2 text-xs underline cursor-pointer"
          onClick={() => {
            location === "cart"
              ? userResources.post(`/users/${userId}`, {
                  savedList: [
                    {
                      title: productName,
                      price: unitPrice,
                      quantity: number,
                      totalPrice: totalPrice,
                      description: description,
                      image: image,
                    },
                  ],
                })
              : userResources.post(`/users/${userId}`, {
                  cartList: [
                    {
                      title: productName,
                      price: unitPrice,
                      quantity: number,
                      totalPrice: totalPrice,
                      description: description,
                      image: image,
                    },
                  ],
                });
          }}
        >
          {location === "cart" ? "Save For Letter" : "Add To Cart"}
        </h1>
        <h1
          className="text-xs text-zinc-500 font-semibold cursor-pointer"
          onClick={remove}
        >
          Remove
        </h1>
      </div>
 
    </div>
  ) : (
    ""
  );
}
export default ListItem;

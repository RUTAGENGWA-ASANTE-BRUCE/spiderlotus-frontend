import React, { useState, useEffect, useContext } from "react";
import Plus from "@heroicons/react/solid/PlusIcon";
import Minus from "@heroicons/react/solid/MinusIcon";
import "../../App.css";
import Single from "../products/single";
import ArrowLeft from "@heroicons/react/solid/ArrowNarrowLeftIcon";
import userResources from "../dbResources/axios";
import { Link } from "react-router-dom";
import ListItem from "./listIem";
import ListItemLoader from "./listitemLoader"
import { AppContext } from "../../App";

function Cart() {
  const {
    userToken,
    userId,
    cartItems,
    savedItems,
    totalItems,
    setTotalItems,
    overallPrice,
    setOverallPrice,
    setPaymentItems,
    setPaymentOverallPrice,
  } = useContext(AppContext);

  return userToken ? (
    <div className=" mt-2 mx-3 relative right-6 w-full ">
      <div className="flex flex-row border-b pb-3 w-52 sm:w-[465px]  md:w-[57%] xl:w-[75%] mb-3 justify-between  ml-6  ">
        <h1 className=" font-semibold text-sm sm:text-base md:text-lg xl:text-xl ">Shopping Cart</h1>
        <p className="text-black text-base sm:text-xl ml-2 mr-1" dir="">
          <span dir="rtl">{totalItems}</span> Items
        </p>
      </div>
      {cartItems?(<div className="w-full">

     
      {cartItems.length > 0 ? (
        <div className="flex sm:flex-row ml-6 flex-col">
          <h1 className="text-zinc-400 text-md font-semibold">
            Product Details
          </h1>
         
          <h1 className="text-blue-400 text-xs sm:hidden flex font-semibold">
            Scroll right to see more details
          </h1>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col ml-6 w-full ">
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <ListItem
              productName={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              totalCost={item.totalPrice}
              location={"cart"}
              userId={userId}
              setTotalItems={setTotalItems}
              allItems={totalItems}
              allPrice={overallPrice}
              setOverallPrice={setOverallPrice}
            />
          ))
        ) : (
          <h1 className="my-16 font-semibold  text-sm sm:text-base md:text-lg xl:text-xl ml-6">
            {" "}
            You have no items in your cart
          </h1>
        )}
      </div>
      { cartItems.length > 0 ? (
        <div className="flex flex-col mt-5  ml-6 whitespace-nowrap sm:ml-[50%]  md:ml-[63%] xl:ml-[52.5%] ">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h1 className="text-black text-sm ">Order Sub-total</h1>
              <h1 className="text-zinc-500 text-sm ">{totalItems} Items</h1>
            </div>
            <h1
              className="text-md ml-24  xl:ml-56 -mr-1  text-black font-semibold  w-1"
              dir="RTL"
            >
              {" "}
              ${overallPrice}
            </h1>
          </div>
          <Link to={`/payment`}>
            <button
              className=" w-[200px] xl:w-80 rounded-sm h-10 mt-3 text-white bg-green-500"
              onClick={() => {
                setPaymentItems(cartItems);
                let paymentTotalPrice = 0;
                cartItems.map((paymentItem) => {
                  paymentTotalPrice += paymentItem.totalPrice;
                });
                setPaymentOverallPrice(paymentTotalPrice);
              }}
            >
              CHECK OUT
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      </div>):<div className="w-full ml-6 flex flex-col">
        <ListItemLoader />
        <ListItemLoader />
        <ListItemLoader />
        <ListItemLoader />
        <ListItemLoader />
        <ListItemLoader />
        <ListItemLoader />
      </div>}
      <p className=" w-52 font-semibold md:text-lg xl:text-xl ml-6 sm:w-[465px]  md:w-[57%] xl:w-[75%] mt-6 m-2 border-b-2 pb-5 ">
        Your Saved Items
      </p>
      {savedItems?(<div className="w-full">

     
{savedItems.length > 0 ? (
  <div className="flex sm:flex-row ml-6 flex-col">
    <h1 className="text-zinc-400 text-md font-semibold">
      Product Details
    </h1>
   
    <h1 className="text-blue-400 text-xs sm:hidden flex font-semibold">
      Scroll right to see more details
    </h1>
  </div>
) : (
  ""
)}
<div className="flex flex-col ml-6 w-full ">
  {savedItems.length > 0 ? (
    savedItems.map((item, i) => (
      <ListItem
        productName={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        totalCost={item.totalPrice}
        location={"cart"}
        userId={userId}
        setTotalItems={setTotalItems}
        allItems={totalItems}
        allPrice={overallPrice}
        setOverallPrice={setOverallPrice}
      />
    ))
  ) : (
    <h1 className="my-16 font-semibold  text-sm sm:text-base md:text-lg xl:text-xl ml-6">
      {" "}
      You have no saved items 
    </h1>
  )}
</div>

</div>):<div className="w-full ml-6 flex flex-col">
  <ListItemLoader />
  <ListItemLoader />
  <ListItemLoader />
  <ListItemLoader />
  <ListItemLoader />
  <ListItemLoader />
  <ListItemLoader />
</div>}
      {cartItems ? (
        <div>
          <p className="text-zinc-400 text-sm ml-8 m-2">Related Products </p>
          <div className="flex flex-row flex-wrap">
            <Single />
            <Single />
            <Single />
            <Single />
            <Single />
          </div>
        </div>
      ) : (
        ""
      )}
      <Link to={"/products"}>
      <p className="flex flex-row text-green-500 ml-6 cursor-pointer m-16">
        <ArrowLeft className="h-5 mr-1 mt-0.5" />
        {cartItems ? "Continue" : "Return"} Shopping
      </p>
      </Link>
    </div>
  ) : (
    <div className="w-full">
      <div className="h-full flex-col w-56 m-auto  pt-5  getLoggedIn pb-5">
        <p className="font-semibold ">Get more customized service</p>
        <Link to={"/Signin"}>
          {" "}
          <button className="w-40 bg-slate-500 px-7  py-1 text-white rounded-sm mt-2 ml-8">
            Sign In
          </button>
        </Link>
        <p className="mt-1 ml-8">
          New customer?
          <Link to={"/Signup"}>
            <span className="cursor-pointer hover:text-slate-500 ml-2 text-sm text-blue-400 font-semibold">
              Sign Up
            </span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Cart;

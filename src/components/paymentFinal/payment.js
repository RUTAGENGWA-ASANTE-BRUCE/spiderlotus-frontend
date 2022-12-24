import React, { useState, useEffect, useContext } from "react";
import "../../app2.css";
import SecureIcon from "@material-ui/icons/LockOutlined";
import Assurance from "@material-ui/icons/SpaOutlined";
import CheckBadge from "@heroicons/react/solid/BadgeCheckIcon";
import CheckBadgeUnFilled from "@heroicons/react/outline/BadgeCheckIcon";
import ShippingIcon from "@material-ui/icons/LocalShippingOutlined";
import userResources from "../dbResources/axios";
import { Link,Navigate, useLocation,useNavigate} from "react-router-dom";
import { AppContext } from "../../App";
import PulseLoader from "react-spinners/PulseLoader"

function Payment() {
  const cards = [
    ["paypal", "card1.png", "mastercard.png"],
    ["visa", "card2.png", "visa.png"],
  ];
  const { userToken, myData, paymentItems,cartItems, totalItems, overallPrice, userId,paymentOverallPrice,forceUpdate,setOrders } =
    useContext(AppContext);
  const [card1, setCard1] = useState("text-black border-black");
  const [card2, setCard2] = useState("text-gray-500 ");
  const [card3, setCard3] = useState("text-gray-500");
  const [loading, setLoading] = useState(false)

  const [cardBeingUsed, setCardBeingUsed] = useState(cards[0][2]);
  let importFee = 20;
  const location = useLocation();
 const navigate=useNavigate()
  
  return userToken ? (
    <div className="">
      <div className="flex flex-col md:flex-row mx-5 xl:mx-10 my-3 ">
        <div className="w-full md:w-[60%] flex flex-col rounded-md bg-white pt-10 pb-0.5 px-5 xl:px-14 ">
          <div className="flex flex-row justify-between">
            <img src="/logo4.png" alt="" className="h-9" />
            <div className="flex flex-row  w-48 p-1  justify-between bg-gray-200 rounded-3xl">
              <h1 className="ml-2.5 mt-0.5 w-36   truncate mr-1">
                {myData.userName}{" "}
              </h1>
              <div className="w-8 h-8 rounded-full">
                <img
                  src={myData.profilePicture}
                  alt=""
                  className="w-8 h-8 rounded-full  "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-8 pb-7 ">
            <h1 className="text-base md:text-xl whitespace-nowrap xl:text-4xl font-semibold">Payment details</h1>
            <div className="flex flex-col md:text-base text-sm">
              <h1 className="font-semibold">
                <SecureIcon fontSize="small" className="" />{" "}
                <span className="ml-2">Card is secure</span>{" "}
              </h1>
              <div className="flex flex-col ml-8">
                <h1 className="text-xs xl:text-sm text-gray-500">Your data is private,</h1>
                <h1 className="text-xs xl:text-sm text-gray-500">
                  Everything will be protected
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex-col  md:hidden flex">
              <h1 className="text-3xl xl:text-4xl font-semibold mt-10  ">
                Order Summary
              </h1>
              <div className="flex flex-col ">
                {paymentItems
                  ? paymentItems.map((item) => (
                      <div className=" flex-row mt-5 justify-between flex ">
                        <h1>
                          {item.quantity > 1 ? item.quantity : ""} {item.title}
                        </h1>
                        <h1 className="font-semibold">${item.totalPrice}</h1>
                      </div>
                    ))
                  : ""}
                <div className="flex flex-row mt-5 justify-between">
                  <h1>Estimated shipping: </h1>
                  <h1 className="font-semibold">${importFee}</h1>
                </div>

                <div className="flex flex-row justify-between mt-32">
                  <h1>Total:</h1>
                  <h1 className="font-semibold">${paymentOverallPrice + importFee}</h1>
                </div>
                <div className="flex flex-row justify-between mt-5">
                  <h1>Your location:</h1>
                  <h1 className="font-semibold">Kigali</h1>
                </div>
              </div>
            </div>
          <div className="border-b-2 h-10 w-full mt-5 md:mt-0">
            <div className="flex flex-row w-56  justify-between">
              <h1 className={`${card1} border-b-2 h-10 `}>
                <span
                  className="hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    setCard1("text-black border-black");
                    setCard2("text-gray-500 ");
                    setCard3("text-gray-500 ");
                  }}
                >
                  Credit Card
                </span>
              </h1>
              <h1 className={`${card2} border-b-2 h-10 `}>
                <span
                  className="hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    setCard1("text-gray-500 ");
                    setCard2("text-black border-black");
                    setCard3("text-gray-500 ");
                  }}
                >
                  Paypal
                </span>
              </h1>
              <h1 className={`${card3} border-b-2 h-10 `}>
                <span
                  className="hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    setCard1("text-gray-500");
                    setCard2("text-gray-500 ");
                    setCard3("text-black border-black ");
                  }}
                >
                  Other
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-row flex-wrap xl:flex-col mt-3 gap-5  ">
              {cards.map((card) => (
                  <img
                    src={`/${card[1]}`}
                    alt=""
                    className="w-20 xl:w-40 object-contain h-32 rounded-md cursor-pointer"
                    onClick={() => {
                      setCardBeingUsed(card[2]);
                    }}
                  />
              ))}
                <img
                  src={`/card1.png`}
                  alt=""
                  className="w-20 xl:w-40 h-32 object-contain rounded-md"
                />
            </div>
            <form className=" xl:mb-4 mb-4 xl:ml-20 mt-5">
              <div className="flex flex-col">
                <label className="mt-2">Credit card</label>
                <div className="flex flex-row justify-between bg-gray-200 p-2.5">
                  <input
                    type="text"
                    placeholder="1111 1111 1111 1111"
                    className=" rounded-sm outline-none border-none w-[93%] bg-gray-200"
                    required
                  />
                  <div className="w-16 h-8 rounded-md bg-gray-200 ml-10">
                    <img
                      src={`/${cardBeingUsed}`}
                      alt=""
                      className="w-16 h-12 relative bottom-1     rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mt-2">Name</label>
                <input
                  type="text"
                  readOnly
                  value={myData.userName}
                  className="mt-4 rounded-sm p-3 w-[283px] md:w-[395px] bg-gray-200"
                  required
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <label className="mt-2">Expiration date</label>
                  <input
                    type="date"
                    placeholder="08/2021"
                    className="mt-4 rounded-sm p-3 w-36 bg-gray-200"
                    required
                  />
                </div>
                <div className="flex flex-col ml-10">
                  <label className="mt-2">CVV</label>
                  <input
                    type="password"
                    placeholder=""
                    className="mt-4 rounded-sm p-3 w-20 bg-gray-200"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <Link to={`/orders`}>
                  <button
                    className=" bg-black text-white rounded-md w-32 md:w-40 hover:text-black hover:bg-white border-2 border-black p-3"
                    onClick={async() => {
                      setLoading(true);
                      var itemNames = [];
                      paymentItems.map((item) => {
                        itemNames.push(item.title);
                      });
                      const sentItem=await userResources.post(`/orders`, {
                        customer: myData.userName,
                        customerImage: myData.profilePicture,
                        customerId: myData._id,
                        adress: {
                          country: myData.location.country,
                          city: myData.location.city,
                        },
                        products: itemNames,
                        date:
                          new Date(Date.now()).getFullYear() +
                          "-" +
                          new Date(Date.now()).getMonth() +
                          "-" +
                          new Date(Date.now()).getDate(),
                        status: "Pending",
                        otherDetails: {
                          products: paymentItems,
                          totalItems: totalItems,
                          totalPrice: overallPrice,
                          importFee: importFee,
                          totalCost: importFee + overallPrice,
                        },
                      });
                      if(sentItem){
                        setLoading(false);
                      setOrders((list)=>[...list,sentItem.data])
                 navigate("/orders",{replace:true});

                      }
                    }}
                  >
                    Confirm order
                  </button>
                </Link>
                <button className="text-[13px] md:text-base border-none ml-4 hover:text-black text-gray-500">
                  Cancel and Return{" "}
                </button>
              </div>
            {loading?<div className="w-fit m-auto my-3"><PulseLoader color={'#0ec45a'} loading={loading} size={15}   /></div>:""}

            </form>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          {paymentItems ? (
            <div className=" flex-col  md:flex hidden">
              <h1 className="text-3xl xl:text-4xl font-semibold mt-10 mx-8 md:flex hidden">
                Order Summary
              </h1>
              <div className="flex flex-col mx-8">
                {paymentItems
                  ? paymentItems.map((item) => (
                      <div className=" flex-row mt-5 justify-between md:flex hidden">
                        <h1>
                          {item.quantity > 1 ? item.quantity : ""} {item.title}
                        </h1>
                        <h1 className="font-semibold">${item.totalPrice}</h1>
                      </div>
                    ))
                  : ""}
                <div className="flex flex-row mt-5 justify-between">
                  <h1>Estimated shipping: </h1>
                  <h1 className="font-semibold">${importFee}</h1>
                </div>

                <div className="flex flex-row justify-between mt-32">
                  <h1>Total:</h1>
                  <h1 className="font-semibold">${paymentOverallPrice + importFee}</h1>
                </div>
                <div className="flex flex-row justify-between mt-5">
                  <h1>Your location:</h1>
                  <h1 className="font-semibold">Kigali</h1>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col mt-5  mx-4 md:mx-8">
            <h1 className="text-4xl font-semibold mt-10 ">Order Safety</h1>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row  mt-3">
                <div className="flex flex-col text-[12px] xl:text-base">
                  <h1 className="flex flex-row ">
                    <Assurance
                      fontSize="small"
                      className="text-zinc-500 mt-0.5 mr-1"
                    />
                    Trade asurance protect your SL Order
                  </h1>
                  <h1 className="flex flex-row ">
                    <CheckBadge className="h-5 mt-0.5 text-zinc-500 mr-1" />
                    On-Time delivery
                  </h1>
                  <h1 className="flex flex-row ">
                    <CheckBadgeUnFilled className="h-5 mt-0.5 text-zinc-500 mr-1" />
                    Refund Policy
                  </h1>
                  <h1 className="flex flex-row ml-0.5">
                    <ShippingIcon fontSize="small" className="mt-0.5 mr-1 text-zinc-500" />
                    DropShipping Service
                  </h1>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/Signin"} replace state={{ from: location }} />

  );
}

export default Payment;

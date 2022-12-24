import React, { useState, useContext, useEffect } from "react";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Assurance from "@material-ui/icons/SpaOutlined";
import CheckBadge from "@heroicons/react/solid/BadgeCheckIcon";
import CheckBadgeUnFilled from "@heroicons/react/outline/BadgeCheckIcon";
import ShippingIcon from "@material-ui/icons/LocalShippingOutlined";
import Single from "./single";
import Plus from "@heroicons/react/solid/PlusIcon";
import Minus from "@heroicons/react/solid/MinusIcon";
import ReactImageMagnify from "react-image-magnify";
import Protected from "@heroicons/react/solid/ShieldCheckIcon";
import "../../app2.css";
import SingleCustomized from "./SingleCustomized";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import userResources from "../dbResources/axios";
import { AppContext } from "../../App";
import PulseLoader from "react-spinners/PulseLoader";
function Each({ product }) {
  const [number, setNumber] = useState(1);
  // const [userId, setUserId] = useState("");
  const [totalPrice, setTotalPrice] = useState(number * product.price);
  const [button1, setButton1] = useState("bg-green-500 text-white ");
  const [button2, setButton2] = useState("text-zinc-500  bg-white");
  const [details, setDetails] = useState("productDetails");
  const [loading, setLoading] = useState(false);
  const {
    userToken,
    userId,
    setCartItems,
    setPaymentItems,
    setPaymentOverallPrice,
    products,
  } = useContext(AppContext);

  const unitPrice = product.price;
  function add() {
    setNumber(number + 1);
    setTotalPrice(totalPrice + unitPrice);
  }
  function minus() {
    if (number > 0) {
      setNumber(number - 1);
      setTotalPrice(totalPrice - unitPrice);
    }
  }
  const location = useLocation();

  const navigate = useNavigate();
  return (
    <div className="flex flex-col  ml-2 ">
      <div className="flex flex-row pb-5 pt-3 md:pt-10 w-full flex-wrap  bg-white">
        <div className="w-[30%] md:w-96 md:h-96 mx-3 flex flex-col ">
          <div className="flex xl:hidden flex-col border-b border-opacity-25 border-black">
            <h1 className="text-lg md:text-2xl text-black font-semibold productName  h-fit">
              {product.title}
            </h1>
            <h1 className="text-md text-blue-500 font-semibold">
              Visit the Spider Lotus Store
            </h1>
          </div>
          <div className="flex flex-row mt-5 xl:mt-0">
            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 border-gray-400 ">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 my-0.5 mr-0.5"
              />
            </div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 border-gray-400 ">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 my-0.5 mr-0.5"
              />
            </div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 border-gray-400 ">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 my-0.5 mr-0.5"
              />
            </div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 border-gray-400 ">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 my-0.5 mr-0.5"
              />
            </div>

            <div className="h-16 w-16 mx-1 xl:mx-3 border-2 border-gray-400 ">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 my-0.5 mr-0.5"
              />
            </div>
          </div>

          <ReactImageMagnify
            className="mt-2"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: product.image,
              },
              largeImage: {
                src: product.image,
                width: 500,
                height: 500,
              },
              isHintEnabled: true,
              hintTextMouse: "Hover to Enlarge",
              hintTextTouch: "Tap to Enlarge",
              shouldHideHintAfterFirstActivation: false,
            }}
          />
        </div>
        <div className="flex flex-col pl-6 w-full md:w-[70%]">
          <div className="hidden xl:flex flex-col border-b border-opacity-25 border-black">
            <h1 className="text-2xl text-black font-semibold productName  h-fit">
              SL {product.title}
            </h1>
            <h1 className="text-md text-blue-500 font-semibold">
              Visit the Spider Lotus Store
            </h1>
          </div>
          <div className="flex flex-row">
            <h1 className="text-sm md:text-base mt-1 font-serif">Price:</h1>
            <h1 className=" text-sm md:text-xl mt-1 ml-2 text-orange-400">
              ${product.price}
            </h1>
          </div>
          <h1 className="text-xs md:text-[13px] xl:text-base text-black">
            <span className=" font-semibold">$15</span> Shipping & Importing
            Fees deposit to{" "}
            <span className="font-serif">
              Niger Port <ArrowDownIcon fontSize="small" className="mt-0.5" />{" "}
            </span>
          </h1>

          <div className="flex flex-col mt-3">
            <h1 className=" text-2xl text-black font-semibold xl:border-0 border-b-2 border-black">
              Description
            </h1>
            <p className=" mt-2">{product.description}</p>
          </div>

          <div className="flex flex-row  mt-3">
            <h1 className="text-sm">Protection:</h1>
            <div className="flex flex-col">
              <h1 className="flex flex-row ml-2 text-[13px] xl:text-base">
                <Assurance
                  fontSize="small"
                  className="text-zinc-500 mt-0.5 mr-1 "
                />
                Trade asurance protect your SL Order
              </h1>
              <h1 className="flex flex-row ml-2 text-[13px] xl:text-base">
                <CheckBadge className="h-5 mt-0.5 text-zinc-500 mr-1" />
                On-Time delivery
              </h1>
              <h1 className="flex flex-row ml-2 text-[13px] xl:text-base">
                <CheckBadgeUnFilled className="h-5 mt-0.5 text-zinc-500 mr-1" />
                Refund Policy
              </h1>
            </div>
          </div>

          <div className="flex flex-row  mt-3">
            <h1 className="">Service:</h1>
            <div className="flex flex-col ml-6 text-[13px] xl:text-base">
              <h1 className="flex flex-row ml-2">
                <ShippingIcon fontSize="small" className="mt-0.5 mr-1" />
                DropShipping Service
              </h1>
              <h1 className="flex flex-row ml-2">On-Time delivery</h1>
              <h1 className="flex flex-row ml-2">Refund Policy</h1>
            </div>
          </div>
          <div className="flex flex-col ml-5  xl:ml-1 mt-10 xl:mt-0  ">
            <h1 className=" text-2xl text-black font-semibold xl:border-0 border-b-2 border-black">
              Order and Cart Options
            </h1>
            <h1 className="text-xl mt-1 text-orange-400">
              <span className="text-black">Total Cost: </span>${totalPrice}
            </h1>

            <h1 className="text-xs md:text-sm xl:text-sm text-black mt-2">
              <span className=" font-semibold">$10</span> Shipping & Importing
              Fees deposit to{" "}
              <span className="font-serif ">
                Niger port
                <ArrowDownIcon fontSize="small" className="mt-0.5" />{" "}
              </span>
            </h1>
            <h1 className="text-md text-black mt-2">
              Delivery{" "}
              <span className="font-bold text-green-400">Sunday 16 March </span>
            </h1>
            <h1 className="text-md text-black mt-2">
              Order aprooved with in
              <span className="font-bold "> 4 Hours 59 minutes </span>
            </h1>
            <p className="flex flex-row  ml-28 border h-7 w-20  mt-3 px-0.5 rounded-md">
              <Plus className="h-5 mt-1  cursor-pointer" onClick={add} />
              <span className="w-10  h-3 text-center text-md">
                {number}
              </span>{" "}
              <Minus className="h-6  cursor-pointer" onClick={minus} />
            </p>
            <button className="mt-2 bg-sky-300 w-80 rounded-2xl h-10">
              <h1
                className="       mt-1 text-white "
                onClick={async () => {
                  setLoading(true);
                  const itemSent = await userResources.post(
                    `/users/${userId}`,
                    {
                      cartList: [
                        {
                          title: product.title,
                          price: product.price,
                          quantity: number,
                          totalPrice: totalPrice,
                          description: product.description,
                          image: product.image,
                        },
                      ],
                    }
                  );

                  if (itemSent) {
                    setLoading(false);
                    setCartItems((list) => [
                      ...list,
                      itemSent.data.cartList[0],
                    ]);
                    navigate("/cart", { replace: true });
                  }
                }}
              >
                Add to Cart
              </h1>
            </button>
            {loading ? (
              <div className="w-fit m-auto my-3">
                <PulseLoader color={"#0ec45a"} loading={loading} size={15} />
              </div>
            ) : (
              ""
            )}
            <Link to={`/payment`}>
              <button
                className="mt-5 bg-sky-600 w-80 rounded-2xl h-10"
                onClick={() => {
                  userResources.post(`/payment/${userId}`, [
                    {
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: number,
                      description: product.description,
                      totalPrice: totalPrice,
                    },
                  ]);
                  setPaymentItems([
                    {
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: number,
                      description: product.description,
                      totalPrice: totalPrice,
                    },
                  ]);
                  setPaymentOverallPrice(totalPrice);
                }}
              >
                <h1 className=" mt-1 text-white ">Buy now</h1>
              </button>
            </Link>
            <h1 className="mt-2   text-sm flex flex-row">
              <Protected className="text-zinc-400 h-5" /> Protected transaction
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b border-black border-opacity-20 mx-3 pb-5">
        <p className="text-zinc-400 text-sm ml-6 m-3">Related Products </p>
        <div className="flex flex-wrap flex-row gap-7">
          {products.filter(
            (oneProduct, i) =>
              oneProduct["title"] != product["title"] &&
              oneProduct["category"] == product["category"]
          ).length > 0 ? (
            products
              .filter(
                (oneProduct, i) =>
                  oneProduct["title"] != product["title"] &&
                  oneProduct["category"] == product["category"]
              )
              .map((one, i) => {
                if (i < 5) {
                  return (
                    <SingleCustomized
                      image={one.image}
                      name={one.title}
                      price={one.price}
                      routeId={one.id}
                    />
                  );
                }
              })
          ) : (
            <h1 className="flex flex-row ml-6 h-10">
              No related products available
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Each;

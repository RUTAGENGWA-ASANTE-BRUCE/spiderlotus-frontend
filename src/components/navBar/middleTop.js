import React, { useState, useContext, useEffect } from "react";
import LocationIcon from "@heroicons/react/outline/GlobeIcon";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDownOutlined";
import SearchIcon from "@material-ui/icons/Search";
import EuroSign from "@material-ui/icons/EuroSymbol";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import UpICon from "@material-ui/icons/ArrowDropUpOutlined";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import userResources from "../dbResources/axios";
import axios from "axios";
import { AppContext } from "../../App";
import UserDataLoader from "./userDataLoader";
import UserLocationLoader from "./userLocationLoader";
// import { LiveProvider, LiveError, LivePreview } from 'react-live'
function MiddleTop() {
  const [user, setUser] = useState({});
  const { userToken, userId, defaultSettings, myData, users,setSearchValue } =
    useContext(AppContext);
  console.log(userToken, userId, defaultSettings, myData, users);
  const [searchCategory, setSearchCategory] = useState("All");

  const [showCurrencyCustomizer, setShowCurrencyCustomizer] =
    useState("hidden");

  const [displayAccountComponents, setDisplayAccountComponents] =
    useState("opacity-0");

  const lists = ["Make a list", "Find a List", "SL perfectList"];
  const accountComponent = [
    "Account",
    "Orders",
    "Reccomendation",
    "Contents & Devices",
    "Cart",
    "Your location",
    "Currency Settings",
  ];
  function account() {
    return (
      <div
        className={`flex  flex-col ${displayAccountComponents} z-10 absolute sm:left-[55.5%] md:left-[58.5%] left-[22%] xl:left-[67%] md:bg-white   w-72 h-80 shadow-sm shadow-zinc-500  bg-white  border rounded-sm  sm:mt-14 md:top-24   mt-16`}
      >
        <UpICon
          className="text-white absolute  left-[250px]  -top-5"
          fontSize="large"
        />
        {userToken ? (
          ""
        ) : (
          <div className="bg-white h-28 flex-col text-center border-b  text-sm pt-2 mx-2 pb-5">
            <p className=" text-black ">Get more customized service</p>
            <Link to={"/Signin"}>
              {" "}
              <button className="w-40 bg-slate-500 px-7  py-1 text-white rounded-sm mt-2">
                Sign In
              </button>
            </Link>
            <p className="mt-1 text-black">
              New customer ?
              <Link to={"/Signup"}>
                <span className="cursor-pointer hover:text-slate-500 ml-2  text-blue-400 ">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        )}
        <div className="flex flex-row justify-between px-3 py-5">
          <div className="flex flex-col ">
            <h1 className="text-md text-black font-semibold">Your Lists</h1>
            {lists.map((item, i) => (
              <p className="text-black text-sm hover:text-zinc-400 cursor-pointer ">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col border-l pl-3">
            <h1 className="text-md text-black font-semibold">Your Account</h1>
            {accountComponent.map((component, i) => (
              <p className="text-black text-sm hover:text-zinc-400 cursor-pointer">
                {component}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const [languageUsed, setLanguageUsed] = useState("English");
  const [currencyName, setCurrencyName] = useState("RWF-Rwandan Franc");
  const [userLocation, setUserLocation] = useState("US America");
  const [displayLanguages, setDisplayLanguages] = useState("hidden");

  const [displayCurrencies, setDisplayCurrencies] = useState("hidden");

  function currency() {
    const languages = [
      "English",
      "Deutsch",
      "Português",
      "Español",
      "Français",
      "Italiano",
    ];
    const currencies = [
      [
        "Popular Currencies",
        [
          "USD - US Dollar",
          "EUR - Euro",
          "CAD - Canadian Dollar",
          "JPY - Japanese Yen",
          "SAR - Saudi Arabian Ryal",
          "MXN - Mexican Peso",
          "GBP - British Pound",
          "AUD - Australian Dollar",
        ],
      ],
      [
        "All Currencies",
        [
          "KMF - Comorros Franc",
          "Dominican - Peso",
          "MAD - Morocan Dirham",
          "GEL - Georgian Lari",
          "Sierra Leone Leone",
        ],
      ],
    ];
    return (
      <div
        className={`${showCurrencyCustomizer} z-10 flex-col bg-white  absolute    shadow-sm shadow-zinc-500 xl:left-[618px] md:left-[400px] sm:left-[300px] top-[96px]  w-80 p-2 h-64 gap-4 pl-4  border rounded-sm  `}
        onFocus={() => setShowCurrencyCustomizer("flex")}
      >
        <UpICon
          className="text-white absolute currencyUpIcon -top-5"
          fontSize="large"
        />

        <p className="text-md text-black font-semibold">Regional Settings</p>
        <p className="mt-2 text-zinc-500">Language</p>
        <button
          className="text-black w-56 text-left pl-2 h-fit bg-zinc-100"
          onClick={() => {
            setDisplayLanguages("flex");
            setShowCurrencyCustomizer("flex");
          }}
          onBlur={() => {
            setDisplayLanguages("hidden");
            setShowCurrencyCustomizer("flex");
          }}
        >
          {languageUsed} <ArrowDownIcon fontSize="medium" className="mt-o.5 " />
        </button>
        <p
          className={` ${displayLanguages} flex-col w-40 h-52  absolute bg-zinc-200  p-2 dropLanguages`}
        >
          {languages.map((language) => (
            <p
              className="text-black text-sm py-1 hover:bg-zinc-300 cursor-pointer text-left"
              onClick={() => {
                setLanguageUsed(language);
                setDisplayLanguages("hidden");
              }}
            >
              {language}
            </p>
          ))}
        </p>

        <p className="mt-2 text-zinc-500">Currency</p>
        <p
          className="text-black  text-left pl-2 bg-zinc-100 w-56  h-fit cursor-pointer"
          onClick={() => {
            setShowCurrencyCustomizer("flex");
            setDisplayCurrencies("flex");
          }}
          onBlur={() => {
            setDisplayCurrencies("hidden");
            setShowCurrencyCustomizer("flex");
          }}
        >
          {currencyName} <ArrowDownIcon fontSize="medium" className="mt-o.5" />
        </p>
        <div
          className={`${displayCurrencies}  flex-col w-72 h-52  absolute bg-zinc-200  p-2 dropCurrencies overflow-y-scroll`}
        >
          {currencies.map((group) => (
            <div
              className="text-black text-sm mt-3   text-left "
              onClick={() => {
                setShowCurrencyCustomizer("flex");
              }}
              onBlur={() => {
                setShowCurrencyCustomizer("hidden");
              }}
            >
              {/*              @ts-ignore*/}
              <h1 className="text-md text-zinc-400 ">{group[0]}</h1>
              {group[1].map((currency) => (
                <h1
                  className="text-black text-sm py-1 cursor-pointer hover:bg-zinc-300"
                  onClick={() => {
                    setCurrencyName(currency);
                    setShowCurrencyCustomizer("opacity-100");
                    setDisplayCurrencies("hidden");
                  }}
                >
                  {currency}
                </h1>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  const navigate = useNavigate();

  const [specifier, setSpecifier] = useState("");
  const submit = (e) => {
    e.preventDefault();
    navigate("/products",{replace: true})
    if (specifier) {
      setSearchValue(specifier);
    }
  };
  function handle(e) {
    setSpecifier(e.target.value);
    setSearchValue(e.target.value)
  }

  return (
    <div className=" flex  flex-row bg-slate-700 backGround  pr-1 py-1 text-white  text-[9px] lg:text-base md:text-base sm:text-base xl:justify-evenly md:justify-evenly sm:justify-evenly   ">
      <div className=" flex flex-row ">
        <Link to={"/"}>
          <img
            src="/logo5.png"
            alt=""
            className=" h-12  sm:h-12 md:h-14 xl:h-14 p-1 border-2  object-contain border-opacity-0  border-white hover:border-opacity-100 cursor-pointer"
          />
        </Link>

        <div className=" ml-2 mt-2 bg-white text-black  h-8 xl:w-80 sm:w-72 md:w-80 w-52 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md flex flex-row  ">
          <button className="    bg-zinc-300 h-8  " type="submit">
            <SearchIcon fontSize="medium" className="ml-5 relative right-2" />
          </button>
          <form
            method="POST"
            className="xl:w-80 sm:w-72 md:w-80 w-52 px-2 mt-1"
            onSubmit={submit}
          >
            <input
              type="text"
              className=" border-none outline-none w-full text-sm mt-1 "
              placeholder="Search"
              onChange={(e) => {
                handle(e);
              }}
            />
          </form>
        </div>
      </div>
      {userToken ? (
           myData?(
             <button
            className=" flex-row h-12 ml-1 border-2 flex sm:flex md:flex xl:hidden   border-opacity-0 hover:border-opacity-100  border-white "
            onFocus={() => {
              setDisplayAccountComponents("opacity-100 z-20");
            }}
            onBlur={() => {
              setDisplayAccountComponents("opacity-0");
            }}
          >
            <img
              src={myData.profilePicture}
              alt={myData.profilePicture}
              className=" rounded-full h-7 md:h-10 mt-2 md:mt-0.5 w-7 object-contain"
            />
            <h5 className="w-16 md:w-28 ml-1 mt-3 truncate">{myData.userName}</h5>
            <ArrowDownIcon fontSize="small" className="text-white sm:mt-4 mt-2" />
          </button>):(<div className="sm:flex md:flex xl:hidden"><UserDataLoader /></div>)
        ) : (
          <button
            className=" flex-col mx-2 h-12 px-1 border-2 flex sm:flex md:flex xl:hidden  border-opacity-0 hover:border-opacity-100  border-white "
            onFocus={() => {
              setDisplayAccountComponents("opacity-100 z-20");
            }}
            onBlur={() => {
              setDisplayAccountComponents("opacity-0");
            }}
          >
            <p className="relative  ">Welcome, Sign in</p>
            <p className="font-semibold w-fit flex flex-row whitespace-nowrap relative bottom-2 mt-1.5 ">
              Account & Lists{" "}
              <ArrowDownIcon fontSize="small" className="text-white relative bottom-1" />
            </p>
          </button>
        )}
      <div className=" flex-row   hidden sm:hidden md:hidden xl:flex">
        <Link to={"/orders"}>
          <div className="flex flex-col h-12 px-1 border-2  border-opacity-0 hover:border-opacity-100  border-white cursor-pointer">
            <EuroSign
              className=" text-white  ml-12 relative top-1"
              fontSize="small"
            />
            <p className="font-bold  relative bottom-2 mt-2 ">
              Returns & Orders
            </p>
          </div>
        </Link>
        <button
          className="ml-5  pt-3  h-12 p-1 border-2 border-opacity-0  border-white hover:border-opacity-100 cursor-pointer"
          onClick={() => {
            setShowCurrencyCustomizer("flex z-20");
          }}
          onBlur={() => {
            setShowCurrencyCustomizer("hidden");
          }}
        >
          {" "}
          English - RWF <ArrowDownIcon fontSize="small" className="" />{" "}
        </button>
      </div>
      <div className="flex-row hidden sm:hidden md:hidden xl:flex">
        {userToken ? (
          myData ? (
            <button
              className=" flex-row h-12 px-1 mx-2 border-2 flex sm:flex md:hidden xl:flex   border-opacity-0 hover:border-opacity-100  border-white "
              onFocus={() => {
                setDisplayAccountComponents("opacity-100 z-20");
              }}
              onBlur={() => {
                setDisplayAccountComponents("opacity-0");
              }}
            >
              <img
                src={myData.profilePicture}
                alt={myData.profilePicture}
                className=" rounded-full h-10 mt-0.5 object-contain"
              />
              <h5 className="w-28 ml-1 mt-3 truncate">{myData.userName}</h5>
              <ArrowDownIcon
                fontSize="small"
                className="text-white sm:mt-4 mt-2"
              />
            </button>
          ) : (
            <UserDataLoader />
          )
        ) : (
          <button
            className="flex flex-col h-12 px-1 border-2   border-opacity-0 hover:border-opacity-100  border-white "
            onFocus={() => {
              setDisplayAccountComponents("opacity-100 z-20");
            }}
            onBlur={() => {
              setDisplayAccountComponents("opacity-0");
            }}
          >
            <p className="relative  ">Welcome, Sign in</p>
            <p className="font-bold relative bottom-2 mt-1.5 ">
              Accounts & Lists{" "}
              <ArrowDownIcon fontSize="small" className="text-white" />
            </p>
          </button>
        )}

        <div className="flex flex-row ml-2   border-2 h-12  border-opacity-0 hover:border-opacity-100  border-white ">
          <LocationIcon className="h-5 mt-4" />
          <p className="font-bold mt-4 ">
            {userToken?
            myData ? (
              myData.location && myData.location.country
            ) : (
              <UserLocationLoader />
            ):"Location"}
          </p>
        </div>
        <Link to={"/cart"}>
          <div className="flex flex-row h-12 px-1 border-2 pt-3 mt-0.5 border-opacity-0 hover:border-opacity-100  border-white cursor-pointer">
            <ShoppingCart className=" ml-2 relative " fontSize="medium" />
            <p className="font-bold  relative bottom-2 mt-2 ">Cart</p>
          </div>
        </Link>
      </div>
      {account()}
      {currency()}
    </div>
  );
}
export default MiddleTop;

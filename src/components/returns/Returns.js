import react,{useState,useEffect,useContext} from 'react'
import {AppContext} from "../../App.js"
import userResources from "../dbResources/axios.js"
import NotificationIcon from "@material-ui/icons/Notifications"
import OneReturn from "./oneReturn"
import OneReturnLoader from "./oneReturnLoader"
import SearchIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import FilterIconDown from "@heroicons/react/solid/SortDescendingIcon";
import FilterIconUp from "@heroicons/react/solid/SortAscendingIcon";
import SortIcon from "@heroicons/react/solid/AdjustmentsIcon";
import ReturnsIcon from "@material-ui/icons/AssignmentReturn"
import { Link,Navigate,location,useLocation } from "react-router-dom";

function Returns(){
  const location = useLocation();

    const {userToken}=useContext(AppContext)
    const returns=[]
    const [orderCategory1, setOrderCategory1] = useState("teal");
    const [orderCategory2, setOrderCategory2] = useState("text-black");
    const [orderCategory3, setOrderCategory3] = useState("text-black");
    const [orderCategory4, setOrderCategory4] = useState("text-black");
    const [filter, setFilter] = useState("descending");
    const [userId, setUserId] = useState("");
    // const location = useLocation();
  
    function changeFilter() {
      if (filter === "descending") {
        setFilter("ascending");
      }
      if (filter === "ascending") {
        setFilter("descending");
      }
    }

    
    return userToken?
      (<div className="w-[80%]">
      <div className="flex flex-col ml-2">
        <h1 className="text-2xl text-black mt-2 ml-1.5 flex flex-row  font-bold">
          Returns <ReturnsIcon className="h-7 ml-1 mt-1.5 " />
        </h1>
        <div className="w-12 h-1.5 bg-blue-400 rounded-xl ml-1.5" />
      </div>
      <div className="flex flex-col pt-4 w-full mx-3  bg-white m-auto  pr-2 px-2 mt-4">
        <div className="flex flex-row justify-between border-b-2 pb-2 w-full pr-2">
          <div className=" flex flex-row justify-between gap-x-1  md:gap-x-3 ">
            <div className="flex flex-col">
              <h1
                className={`text-${orderCategory1}-500   cursor-pointer text-[8px] sm:text-xs md:text-base`}
                onClick={() => {
                  setOrderCategory1("teal");
                  setOrderCategory2("text-black");
                  setOrderCategory3("text-black");
                  setOrderCategory4("text-black");
                }}
              >
                All Orders 0
              </h1>
              <div
                className={` h-0.5 relative top-2.5 bg-${orderCategory1}-500`}
              />
            </div>

            <div className="flex flex-col">
              <h1
                className={`text-${orderCategory2}-500  text-[8px] sm:text-xs md:text-base cursor-pointer`}
                onClick={() => {
                  setOrderCategory1("text-black");
                  setOrderCategory2("teal");
                  setOrderCategory3("text-black");
                  setOrderCategory4("text-black");
                }}
              >
                Prepared{" "} 0
              </h1>
              <div
                className={` h-0.5 relative top-2.5 bg-${orderCategory2}-500`}
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-${orderCategory3}-500  text-[8px] sm:text-xs md:text-base cursor-pointer`}
                onClick={() => {
                  setOrderCategory1("text-black");
                  setOrderCategory2("text-black");
                  setOrderCategory3("teal");
                  setOrderCategory4("text-black");
                }}
              >
                Delivered{" "} 0
              </h1>
              <div
                className={` h-0.5 relative top-2.5 bg-${orderCategory3}-500`}
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-${orderCategory4}-500 text-[8px] sm:text-xs md:text-base cursor-pointer`}
                onClick={() => {
                  setOrderCategory1("text-black");
                  setOrderCategory2("text-black");
                  setOrderCategory3("text-black");
                  setOrderCategory4("teal");
                }}
              >
                Completed{" "} 0
              </h1>
              <div
                className={`   h-0.5 relative top-2.5 bg-${orderCategory4}-500`}
              />
            </div>
          </div>
          <h1 className="text-[8px]  sm:text-xs md:text-base text-black ">Showing 8-10 of 84 results</h1>
        </div>
        <div className="flex flex-row bg-gray-200 justify-between p-2 mt-2 rounded-md">
          <div className="rounded-md w-80 bg-white p-1 border  flex flex-row">
            <SearchIcon fontSize="small" className="opacity-50 mt-1" />
            <input
              type={"text"}
              className="w-5/6 md:w-72 border-collapse outline-none "
            />
            <CloseIcon fontSize="small" className="mt-1" />
          </div>
          <div className="flex flex-row">
            <button className=" flex flex-row text-teal-400 mx-1 cursor-pointer border rounded-md p-0.5 pt-1 border-teal-400">
              <SortIcon className="h-4 md:h-5 mt-0.5 cursor-pointer" />
              <h1 className=" cursor-pointer text-[9px] sm:text-xs md:text-base mt-0.5">Sort</h1>
            </button>

            <button
              className=" flex flex-row text-teal-400  cursor-pointer border rounded-md pt-1 p-0.5 border-teal-400"
              onClick={changeFilter}
            >
              {filter === "descending" ? (
                <FilterIconDown className="h-4 md:h-5 mt-0.5 cursor-pointer" />
              ) : (
                <FilterIconUp className="h-4 md:h-5 cursor-pointer" />
              )}
              <h1 className="cursor-pointer text-[9px] sm:text-xs md:text-base mt-0.5">Filter</h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-5 rounded-md mb-2 ">
          <div className="  flex-row h-8 xl:justify-between bg-gray-200 pt-1 px-3 md:flex hidden">
            <h1 className="text-sm font-semibold w-24  xl:w-48">ORDER ID</h1>
            <h1 className="text-sm font-semibold w-28 xl:ml-0 ml-2 xl:w-32">CUSTOMER</h1>
            <h1 className="text-sm font-semibold w-28 md:ml-1 xl:ml-0 xl:w-24">PRODUCTS</h1>
            <h1 className="text-sm font-semibold w-28 md:ml-0.5 xl:ml-0 xl:w-24">REVENUE</h1>
            <h1 className="text-sm font-semibold w-16 xl:w-24">DATE</h1>
            <h1 className="text-sm font-semibold w-8 md:ml-3 xl:ml-0 xl:w-24">STATUS</h1>
          </div>
          <div className="flex flex-col mt-2 ">
            {returns
              ?(<div className="flex flex-col mt-2">
                <OneReturn />
                <OneReturn />
                <OneReturn />
                <OneReturn />
                <OneReturn />
                <OneReturnLoader />
              </div>)
              : ""}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="h-full flex-col w-56 m-auto getLoggedIn pt-5  pb-5">
        <p className="font-semibold m-auto">Get more customized service</p>
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
        {/* <Navigate to={"/"} replace state={{from:location}} /> */}
      </div>
    </div>
    )
}
export default Returns;
import React, { useContext,useState } from "react";
import Cart from "../cart/cart";
import Home from "@heroicons/react/solid/HomeIcon";
import ProductsIcon from "@heroicons/react/solid/ArchiveIcon";
import CollectionIcon from "@heroicons/react/solid/CollectionIcon";
import ReturnsIcon from "@material-ui/icons/AssignmentReturn"
import ChatIcon from "@heroicons/react/solid/ChatIcon";
import NotificiationIcon from "@heroicons/react/solid/BellIcon";
import CollapseIcon from "@material-ui/icons/KeyboardArrowLeft"
import ExpandIcon from "@material-ui/icons/ChevronRight"
import ShoppingCart from "@material-ui/icons/ShoppingCart"
import { Link } from "react-router-dom";
import Orders from "../orders/orders";
import { AppContext } from "../../App";
function LoggedIn() {
  // +view!=="expanded"?"w-10":"w-fit"
  const [view,setView]=useState("collapsed")

  function Item({ icon, statement, secondIcon, spaces }) {
    return (
      <div className={view==="expanded"?"active:bg-white active:text-black cursor-pointer pt-2    h-10  pl-1 mt-2  hover:bg-green-400 text-white md:w-32 w-10 ":"active:bg-white active:text-black cursor-pointer pt-2    h-10  pl-1 mt-2  hover:bg-green-400 text-white w-10 m-auto"}>
        <div className=" flex flex-row justify-between ">
          <div className="flex flex-row  ">
            {icon}
            {view==="expanded"?
            <h1 className="hidden md:flex font-semibold text-xs ml-0.5 mt-1">{statement}</h1>
            :""}
            {spaces}

            {view==="expanded"? secondIcon === "" ? (
              ""
            ) : (
              <div className="hidden md:flex w-4 h-4 white bg-red-500 rounded-full  mt-1">
                <span className="text-xs relative  m-auto ">{secondIcon}</span>
              </div>
            ):""}
          </div>
        </div>
      </div>
    );
  }
  const { userToken } = useContext(AppContext);
  return userToken ? (
    <div className="flex flex-row">
      <div className="flex flex-col ml-2  px-1 w-fit my-2 hover: rounded-bl-md rounded-tl-md h-fit gap-y-8 bg-gray-600 pb-1   pt-2">
        <img src="city.jpg" alt="" className="h-10 w-10 rounded-full m-auto" />
        <div className="flex flex-col pl-1 pr-1  ">
        <Link to={"/"}>
          <Item
            icon={<Home className="h-5 mt-0.5 ml-1" />}
            statement={"Dashboard"}
            secondIcon={""}
            spaces=" "
          />
        </Link>
        <Link to={"/cart"}>
          <Item
            icon={<ShoppingCart className="h-5 mt-0.5 ml-1 " />}
            statement={"Cart"}
            secondIcon={""}
            spaces=" "
          />
        </Link>
        <Link to={"/orders"}>
          <Item
            icon={<CollectionIcon className="h-5 mt-0.5 ml-1" />}
            statement={"Orders"}
            secondIcon={"4"}
            spaces="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          />
        </Link>
        <Link to={"/returns"}>
          <Item
            icon={<ReturnsIcon className="h-5 mt-0.5 ml-1" fontSize={"small"}/>}
            statement={"Returns"}
            secondIcon={""}
            spaces=" "
          />
        </Link>
          <Link to={"/Messages"}>
            <Item
              icon={<ChatIcon className="h-5 mt-0.5 ml-1" />}
              statement={"Messages"}
              secondIcon={"2"}
              spaces="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            />
          </Link>
          <Link to={"/notifications"}>
          <Item
            icon={<NotificiationIcon className="h-5 mt-0.5 ml-1" />}
            statement={"Notifications"}
            secondIcon={"1"}
            spaces="&nbsp;"
          />
          </Link>
         {view==="expanded"?<button onClick={()=>setView("collapsed")} className="md:flex hidden w-32 p-0.5 bg-gray-600 h-10 active:bg-black active:text-white hover:bg-zinc-500  my-2"><CollapseIcon className="text-white m-auto" fontSize={"large"} /></button>:<button onClick={()=>setView("expanded")} className=" w-10 p-0.5 h-10 my-2 bg-green-500 active:bg-black active:text-white hover:bg-green-500 m-auto"><ExpandIcon className="text-white m-auto" fontSize={"large"} /></button>}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default LoggedIn;

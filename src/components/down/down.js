import React, { useContext,useEffect,useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "../../App.css"
function Down() {
  const { userToken } = useContext(AppContext);
  const [show, setShow]= useState(true);
  function infoList(title, itemList) {
    return (
      <div className="flex flex-col w-fit mt-10">
        <h1 className="text-sm md:text-xl font-semibold text-white">{title}</h1>
        <ul className="list-none flex flex-col mt-1.5">
          {itemList.map((item) => (
            <li className="text-white hover:text-zinc-300 w-fit cursor-pointer text-xs md:text-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  function AcountCustom(){
    return(
      <div className="bg-white h-full flex-col text-center mt-5 pt-5 mx-2 pb-5">
          <p className="font-semibold">Get more customized service</p>
          <Link to={"/Signin"}>
          <button className="w-40 bg-slate-500 px-7  py-1 text-white rounded-sm mt-2">
            Sign In
          </button>
          </Link>
          <p className="mt-1">
            New customer?
            <Link to={"/Signup"}>
            <span className="cursor-pointer hover:text-slate-500 ml-2 text-sm text-blue-400 font-semibold">
              Sign Up
            </span>
            </Link>
          </p>
        </div>
    )
  }
  const showAccountInfo = ()=>{
    console.log(window.location)
    console.log("show "+show)
     if(window.location.pathname =="/orders" || window.location.pathname =="/cart"){
      setShow((prev)=>!prev);
      console.log("show "+show)
     }else{
       setShow(true);
     }
  }

  useEffect(()=>{
     showAccountInfo();
  }, [window.location.pathname])
  function toTop() {
    document.location = "";
  }
  let prevLocation;
  window.addEventListener("scroll", (event)=>{
    let scroll=this.scrollY;
    console.log(scroll);
  })
  return (
    <div className="heightResponsive">
      {show&& !userToken? (
       <AcountCustom />
      ) : (
        ""
      )}
      <div className="  h-full bg-slate-500   mx-2  mt-2   ">
        <button className="bg-slate-700 w-full h-8 text-white" onClick={toTop}>
          Back To Top
        </button>
        <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pb-10 pl-4 pr-4  md:pl-20 md:pr-10 ">
          {infoList("About Us", [
            "SL Shop ",
            "SL Company",
            "SL Blog",
            "Investor Relations",
            "SL Devices",
          ])}
          {infoList("SL Shop Payment Facilities", [
            "SL Business Card ",
            "Shop Using Other Bank Cards",
            "Fill up Your balance",
            "SL Currency Converter",
          ])}
          {infoList("Customer Services", [
            "Trade Assurance ",
            "Your Orders",
            "Delivery Rates & Shipping policies",
            "Returns & Refunding",
          ])}
          {infoList("Get Help", [
            "SL Business Card ",
            "Spider Lotus and COVID-19",
            "SL Assistant",
            "Manage Your Account",
            "Help",
          ])}
        </div>
      </div>
    </div>
  );
}

export default Down;

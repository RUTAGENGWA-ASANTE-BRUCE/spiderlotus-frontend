import React, { useState,useContext } from "react";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import UpICon from "@material-ui/icons/ArrowDropUpOutlined";
import "../../index";
import { AppContext } from "../../App";
import CategoryLoader from "./categoryLoader";
function UpTop() {
  const [selectCategory, setSelectCategory] = useState(0);
  const [displayCategories, setDisplayCategories] = useState("hidden");

  console.log(selectCategory);
  const [displaySellOnSL, setDisplaySellOnSL] = useState("hidden");
  const {productTypes}= useContext(AppContext);
  function sellOnSL() {
    const options = [
      "For Global Seller",
      "For Rwandan Sellers",
      "Partenership",
    ];
    return (
      <div
        className={`${displaySellOnSL} flex-col bg-white  absolute   shadow-sm shadow-zinc-500 top-[30px] xl:right-[530px] sm:right-[180px] md:right-[180px] right-[42px] w-56 px-2  pb-1  border rounded-sm  `}
      >
        <UpICon
          className="text-white absolute sellUpIcon -top-5"
          fontSize="large"
        />

        {options.map((option) => (
          <h1 className="text-black text-sm hover:text-zinc-400 cursor-pointer mt-1">
            {option}
          </h1>
        ))}
      </div>
    );
  }

  const [displayHelp, setDisplayHelp] = useState("hidden");

  function help() {
    const options = [
      "For Buyers",
      "Fror Suppliers",
      "Submit A Problem",
      "Report Infrengement",
      "Report Abuse",
    ];
    return (
      <div className={`${displayHelp} flex-col bg-white  absolute   shadow-sm shadow-zinc-500 xl:right-[30px] md:right-[98px] sm:right-[110px] top-[30px] right-[20px] z-50 w-48 p-2    border rounded-sm  `}
      >
        <UpICon
          className="text-white absolute right-[0px] -top-5"
          fontSize="large"
        />

        {options.map((option) => (
          <h1 className="text-black text-sm hover:text-zinc-400 cursor-pointer my-1">
            {option}
          </h1>
        ))}
      </div>
    );
  }

  
  function categoryDropdown() {

    return (
      <div className={`${displayCategories} flex flex-col `}>
        <UpICon
          fontSize="large"
          className="text-white absolute top-3.5 left-[184px] sm:left-[366px] md:left-[630px] xl:left-[760px]"
        />
        
        
          {productTypes ?
          (<div
          className={` z-10 text-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5    top-[32px] w-[350px]  sm:w-[500px]  md:w-[900px]  xl:w-[1213px] left-[80px] sm:left-[90px]  md:left-[130px]  xl:left-[175px]    overflow-y-scroll p-5 absolute bg-white  shadow-sm shadow-zinc-500  justify-between gap-2 sm:gap-6 md:gap-6  xl:gap-7  border rounded-sm`}
        >
          {productTypes.map((category, i) => (
            <h1 className="text-blue-500 text-xs sm:text-xs md:text-sm xl:text-sm " >
              {category.mainCategory}
              <div className="text-black ">
                {
                  category.minorCategories.map((one, i) => (
                    <h1 className="text-black text-[10px] sm:text-[10px] md:text-xs xl:text-xs  hover:text-zinc-500 cursor-pointer w-fit">
                      {one}
                    </h1>
                  ))
                }
              </div>
            </h1>
          ))}
        </div>)
          :
          (
        <div className={` z-10 text-black flex flex-row flex-wrap    top-[32px] w-[350px]  sm:w-[500px]  md:w-[900px]  xl:w-[1213px] left-[80px] sm:left-[90px]  md:left-[130px]  xl:left-[175px]    overflow-y-scroll p-5 absolute bg-white  shadow-sm shadow-zinc-500   gap-2 sm:gap-6 md:gap-6  xl:gap-7  border rounded-sm`}>
          
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />
          <CategoryLoader />

          </div>
          )
          }
      </div>
    );
  }

  return (
    <div className="flex  flex-row bg-slate-700    text-[8px]   md:text-xs xl:text-xs    py-1 text-white  ">
      <div className="flex flex-row  w-[600px]   justify-evenly   m-auto ">
        <p className=" cursor-pointer hover:text-zinc-400 sm:mt-1 mt-1">
          {" "}
          Personal Protective E...{" "}
        </p>
        <p className=" cursor-pointer hover:text-zinc-400sm:mt-1 mt-1">
          {" "}
          Trade Shows{" "}
        </p>
        <button
          className="flex flex-row text-orange-300 cursor-pointer  hover:text-zinc-400 "
          onFocus={() => {
            setDisplayCategories("flex z-20");
          }}
          onBlur={() => {
            setDisplayCategories("hidden");
          }}
        >
          <span className="mt-1">Categories</span> <ArrowDownIcon fontSize="small" className="sm:mt-0.5" />
        </button>
        <button
          className=" cursor-pointer relative bottom-0.5 hover:text-zinc-400 sm:mt-1 mt-1"
          onFocus={() => {
            setDisplaySellOnSL("flex");
          }}
          onBlur={() => {
            setDisplaySellOnSL("hidden");
          }}
        >
          {" "}
          Sell on Spider Lotus Shop{" "}
          <ArrowDownIcon fontSize="small" className="" />{" "}
        </button>
        <button
          className=" cursor-pointer   hover:text-zinc-400 mt-0.5 sm:mt-0.5"
          onFocus={() => {
            setDisplayHelp("flex");
          }}
          onBlur={() => {
            setDisplayHelp("hidden");
          }}
        >
          {" "}
          Help <ArrowDownIcon fontSize="small" className="" />{" "}
        </button>
      </div>
      <div className="flex flex-row"></div>
      {categoryDropdown()} {sellOnSL()} {help()}
    </div>
  );
}

export default UpTop;

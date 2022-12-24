import React, { useState,useContext } from "react";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { Link,useNavigate } from "react-router-dom";
import { AppContext} from "../../App";

function DownTop() {
  const [displayAll, setDisplayAll] = useState("opacity-0");
  const {setSearchValue,products}= useContext(AppContext);
  const navigate = useNavigate()
  function all() {
    const dropDownElements = ["All products"];
    products && products.map((one, i) =>{
      // dropDownElements.filter((type, i)=>type==one);
      // if(!d)
      if(!dropDownElements.find((type)=>type==one.category)){
          dropDownElements.push(one.category)
      }
    }) 
    const displayScrollFade=(dropDownElements.length>6)?"flex":"hidden"
    return (
      <div className={``}>
        <div className="flex  flex-row px-5 justify-between space-x-14   bg-slate-700   py-1 whitespace-nowrap  overflow-x-scroll scrollbar-hide ">
          {products && dropDownElements.map((option, i) => (
            
            <p className="hover:text-zinc-400 cursor-pointer z-10 text-white  xl:text-sm text-xs sm:text-xs md:text-sm"
            onClick={() =>{
              if(option=="All products"){
              setSearchValue("")
              }
              else{
              setSearchValue(option)
              }
            navigate("/products",{replace:true});

              }}>
            {option}
            </p>
          ))}
        </div>
        <div className={`${displayScrollFade} absolute  top-[87px] sm:top-[87px] md:top-[95px] right-0 bg-gradient-to-l from-[#0c242d] h-6 sm:h-6 md:h-7 w-1/12`} />
      </div>
    );
  }
  return <div>{all()}</div>;
}

export default DownTop;

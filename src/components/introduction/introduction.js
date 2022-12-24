import React,{useContext} from 'react'
import "./introduction.css"
import Money from "@material-ui/icons/LocalAtmOutlined"
import Assurance from "@material-ui/icons/SpaOutlined"
import Inspection from "@material-ui/icons/PolicyOutlined"
import Location from "@material-ui/icons/LocationOnOutlined"
import styled from 'styled-components'
import MiddleImage from '../imagery/middleImage'
import {Link}  from "react-router-dom"
import {AppContext} from "../../App"

function Introduction ()

{
    function backgrounded (upText, firstImageName, firstIamge, secondImageName, secondImage, thirdIamgeName, thirdImage, fourthIamgeName, fourthIamge, downText)
    {
        return (
            <div className='mt-2'>

                <div className='p-1 bg-white rounded-sm w-72  h-full my-2'>

                    <p className='font-bold text-md ml-1 mt-2'>{upText}</p>
                    <div className='h-80 w-64  px-2 rounded-sm pt-1  transition duration-200 ease-in tranfor hover:scale-105 cursor-pointer'>
                        <div className='flex flex-row pt-5' >
                            <div className='flex flex-col m-2 h-32 bg-slate-200 ' >
                                <img src={firstIamge} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{firstImageName}</p>
                            </div>
                            <div className='flex flex-col m-2 h-32 bg-slate-200 ' >
                                <img src={secondImage} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{secondImageName}</p>
                            </div>
                        </div>
                        <div className='flex flex-row' >
                            <div className='flex flex-col m-2 h-32 bg-slate-200 ' >
                                <img src={thirdImage} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{thirdIamgeName}</p>
                            </div>
                            <div className='flex flex-col m-2 h-32 bg-slate-200   w-32 ' >
                                <img src={fourthIamge} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{fourthIamgeName}</p>
                            </div>
                        </div>
                    </div>
                    <p className='font-semibold relative top-4  text-md ml-1 mt-2 hover:cursor-pointer  text-xs  text-blue-400'>{downText}</p>

                </div>
            </div>
        )
    }
    function noneBackgrounded (upText, firstImageName, firstIamge, secondImageName, secondImage, thirdIamgeName, thirdImage, fourthIamgeName, fourthIamge, downText)
    {
        return (
            <div className='mt-2'>
                

                <Link to={"/All-products"}><div className='p-1 bg-white rounded-sm w-72  h-full my-2'>

                    <p className='font-bold text-md ml-1 mt-2'>{upText}</p>
                    
                    <div className='h-80 w-64  px-2 rounded-sm ml-1 pt-1  transition duration-200 ease-in tranfor hover:scale-105 cursor-pointer'>
                        <div className='flex flex-row pt-5' >
                            <div className='flex flex-col m-2 h-32' >
                                <img src={firstIamge} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{firstImageName}</p>
                            </div>
                                <div className='flex flex-col m-2 h-32' >
                                <img src={secondImage} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{secondImageName}</p>
                            </div>
                        </div>
                        <div className='flex flex-row' >
                            <div className='flex flex-col m-2 h-32' >
                                <img src={thirdImage} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{thirdIamgeName}</p>
                            </div>
                            <div className='flex flex-col m-2 h-32  w-32 ' >
                                <img src={fourthIamge} alt='' className='h-24 w-32' />
                                <p className='ml-1' >{fourthIamgeName}</p>
                            </div>
                        </div>
                    </div>

                    <p className='font-semibold mt-1  relative top-4 text-md ml-1  hover:cursor-pointer text-xs  text-blue-400'>{downText}</p>
                </div></Link>
            </div>
        )
    }
    function onePictured (textUp, imageName, textDown)
    {
        return (
            <div className='mt-2'>

                <div className='p-1 bg-white rounded-sm w-72  h-full my-2'>

                    <p className='font-bold text-md ml-1 mt-2'>{textUp}</p>
                    <div className='h-80 w-64  px-2 rounded-sm ml-1 pt-1 cursor-pointer '>
                        <div className='flex flex-row pt-5' >
                            <div className='flex flex-col m-2 h-72  transition duration-200 ease-in tranfor hover:scale-105' >
                                <img src={imageName} alt='' className='h-64 w-72 bg-blue-400' />

                            </div>

                        </div>
                    </div>
                    <p className='font-semibold mt-1 relative top-4 text-md ml-1  hover:cursor-pointer text-xs  text-blue-400'>{textDown}</p>
                </div>
            </div>
        )
    }
    function largeWidthed (textUp, firstIamge, firstImageName, secondImage, secondImageName, thirdImage, thirdImageName, textDown)
    {
        return (<div className='flex flex-col h-fit bg-white w-[98%] sm:w-auto overflow-x-scroll scrollbar-hide px-3 mt-5 m-auto hover:cursor-pointer'>
            <p className='font-bold text-md ml-4 mt-2'>{textUp}</p>

            <div className='flex flex-row mx-1'>

                <div className='flex flex-col transition duration-200 ease-in tranfor hover:scale-105 ml-2 mt-2'>
                    <div className='h-40 sm:w-36 w-28 '>
                        <img className='h-40  sm:w-36 w-32 ' src={firstIamge} alt='' />
                    </div>
                    <p className='ml-4 text-sm xs:text-base'>{firstImageName}</p>
                </div>

                <div className='flex flex-col transition duration-200 ease-in tranfor hover:scale-105  ml-2  mt-2'>
                    <div className='h-40  sm: sm:w-36 w-32   '>
                        <img className='h-40  sm:w-36 w-32 ' src={secondImage} alt='' />
                    </div>
                    <p className='ml-4 text-sm xs:text-base'>{secondImageName}</p>
                </div>

                <div className='flex flex-col transition duration-200 ease-in tranfor hover:scale-105  m-2  mt-2'>
                    <div className='h-40  sm:w-36 w-32 '>
                        <img className='h-40  sm:w-36 w-32 ' src={thirdImage} alt='' />
                    </div>
                    <p className='ml-4 text-sm xs:text-base'>{thirdImageName}</p>
                </div>
            </div>
            <p className='font-semibold  relative  text-md ml-4 mt-3 pb-1.5 hover:cursor-pointer text-xs  text-blue-400'>{textDown}</p>

        </div>)
    }

    function policy (text, colorLeft, colorRight, downedleft, downedright, icon, bigpolygon, smallpolygon, phrase1, phrase2, phrase3, phrase4, phrase5, hoverClass)
    {
        const Leftcircle = styled.div`
    height: 12px;
    width:12px;
    border-radius: 12px;
    margin-top: ${(downedleft === "yes") ? "36px;" : "0;"};
    background-color:${colorLeft};
    `

        const Rightcircle = styled.div`
    height: 12px;
    width:12px;
    border-radius: 12px;
    margin-top: ${(downedright === "yes") ? "36px;" : "0;"};
    background-color:${colorRight};
    `
    return (<div className='p-1 bg-white rounded-sm w-72 px-4 h-full my-2 flex flex-col'>
    <div className='flex flex-row mt-4 ml-10'>

                <Leftcircle />
                <div className='flex flex-row ml-10'>

                    <div className={smallpolygon}></div>
                    <div className={bigpolygon}></div>
                    {icon}

                </div>
                <Rightcircle />

            </div>
            <p className='font-bold text-md ml-14 mt-4'>{text}</p>
            <div className='flex flex-col relative right-3'>

                <p className={`font-semibold text-zinc-400    text-sm ml-20 mt-4 cursor-pointer w-fit  ${hoverClass}`}>{phrase1}</p>
                <p className={`font-semibold text-zinc-400    text-sm ml-12 mt-4 cursor-pointer w-fit  ${hoverClass}`}>{phrase2}</p>
                <p className={`font-semibold text-zinc-400    text-sm ml-7 mt-4 cursor-pointer w-fit  ${hoverClass}`}>{phrase3}</p>
                <p className={`font-semibold text-zinc-400    text-sm ml-12 mt-4 cursor-pointer w-fit  ${hoverClass}`}>{phrase4}</p>
                <p className={`font-semibold text-zinc-400    text-sm ml-20 mt-4 cursor-pointer w-fit  ${hoverClass}`}>{phrase5}</p>
                <p className='font-semibold    text-md ml-24 mt-3 pb-1.5 hover:cursor-pointer text-xs  text-blue-400'>Learn more</p>
            </div>

        </div>)
    }
    function infoList (title, itemList)
    {
        return (<div className='flex flex-col'>
            <h1 className='text-xl font-semibold text-white'>{title}</h1>
            <ul className='list-none flex flex-col mt-1.5'>
                {itemList.map((item) => (<li className='text-white hover:text-zinc-300 w-fit cursor-pointer  text-md'>{item}</li>))}
            </ul>
        </div>
        )
    }
    function toTop ()
    {
        document.location = ""
    }
    
    return (

        <div className=''>
            <MiddleImage />
            <div className='flex flex-wrap justify-evenly pl-10 pt-1 bg-gray-100 w-fit m-auto h-full mb-7  gap-2 ' >
                {noneBackgrounded("Made In Rwanda products", "Biscuits", "biscuits.png", "Juice", "bottles.png", "Shirts", "shirt.png", "Bags", "bag.png", "See more")}
                {backgrounded("Shop by Category", "stereao Headsets", "headsets.png", "Glasses", "glasses.png", "Toys", "toys.png", "Keyboards", "keyboards.png", "See more")}
                {onePictured("Deals &Promotions", "shop.png", "Shop now")}
                {onePictured("Easy Returns", "return2.png", "Learn more")}
                <div className='mt-2' >
                    <div className='h-40 rounded-sm py-5  w-72 bg-white mt-2' >
                        <p className='text-xl font-semibold h-7  rounded-sm  ml-5  ' >Sign In for the best service</p>
                        <button className='text-md font-semibold h-7  rounded-md  ml-14 mt-5 w-44   bg-slate-500 px-7   text-white' >Sign In</button>

                    </div>
                    <div className='h-56 relative top-1.5 rounded-sm py-5  w-64 ml-4 mt-2 bg-blue-400' >
                        <p className='text-md font-semibold h-7  relative -top-4  ml-5 text-white opacity-85  ' >
                            <span className="ml-5">We deliver many different  </span><br />
                            <span className="relative bottom-1.5 ml-14"> products around</span><br />
                            <span className="relative bottom-3 ml-20">the world</span><br />
                            <span className="relative bottom-4 ml-7 text-black ">Delivery in a short time</span><br />
                        </p>
                        <div className='flex flex-col m-2 h-56 mt-2'  >

                            <img src='delivery.png' alt='' className='h-44' />
                        </div>


                    </div>
                </div>
                {backgrounded("Best Gaming components", "PS5 and PS4", "game1.png", "Gaming Monitors ", "game2.png", "Virtual Gaming", "game3.png", "Bluetooth Controller", "game4.png", "Shop now")}
                {onePictured("Buy Computers and Phones", "tech.png", "See more")}
                {noneBackgrounded("Primier Styles", "jeans package", "clothes1.png", "leisure kit", 'clothes2.png', "fancy blouse", "clothes3.png", "Ornate shoes", "bestShoes.png", "shop now")}
                {onePictured("New Ariivals", "new.png", "See more")}
                {backgrounded("Most globally bought", "Earpods", "most4.png", "Screens ", "most3.png", "Rolex watches", "most2.png", "Lebron shoes", "most1.png", "Shop now")}



            </div>
            <div className='flex flex-wrap flex-row justify-eveny mb-7   '>

                {largeWidthed("Popular books", "book1.png", "marvel books", "book2.png", "Disney stories", "book3.png", "Tricky stories", "See more")}
                {largeWidthed("Shop your favorite Pets and their feeds", "petDish.jpg", "Dog and cat feeders", "dogCat.jpg", "Cats and Puppies", "feeds.jpg", "Best pet food", "See more")}
                {largeWidthed("Products for you", "doors.jpg", "Decorative Doors", "makeUp.jpg", "Beautify your self", "utensils.jpg", "Best home tools", "See more")}
            </div>
            <div className='pl-10 md:pl-24 sm:pl-20 xl:pl-56 pb-3'>

                <h1 className='text-2xl font-semibold xl:ml-96 '>Recommended For You</h1>
            </div>
            <div className='flex flex-wrap justify-evenly pl-20 pt-1 gap-y-3  bg-gray-100 h-full mb-7' >
                {policy("Trade Insurance", "rgb(239,68,68)", "rgb(254,202,202)", "no", "yes", <Assurance fontSize='large' className='absolute ml-2.5 mt-1.5 text-white' />, 'small1 right-14 top-1', 'big1  ', "Order protection", "Location product suppliers", "On-Time shipping and perfection", "Buy and Sell from any place", "Returns agency", "hover:text-zinc-700")}
                {policy("Online payment", "rgb(191,219,254)", "rgb(59,130,246)", "yes", "no", <Money fontSize='large' className='absolute ml-2.5 mt-1.5 text-white' />, 'small2 right-14 top-1', 'big2', "Secured payment ", "Global card types accepted", "Online refunds if no goods shipped", "Local currencies cooperation", "Currency converting", "hover:text-zinc-700")}
                {policy("Inspection systems", "rgb(20,184,166)", "rgb(153,246,228)", "no", "yes", <Inspection fontSize='large' className='absolute ml-2.5 mt-1.5 text-white' />, 'small3 right-14 top-1', 'big3', "production checking", "On-Site industry inspection", "Best products Quality for customers", "Against delivery delays risks", "Order and regulation", "hover:text-zinc-700")}
                {policy("Shipping and delivery", "rgb(254,215,170)", "rgb(249,115,22)", "yes", "no", <Location fontSize='large' className='absolute ml-2.5 mt-1.5 text-white' />, 'small4 right-14 top-1', 'big4', "Fast delivery service", "Pricing according to location", "Best ocean and air shipping agency", "Secure delivery to any location", "Online tracking service", "hover:text-zinc-700")}
            </div>
         

        </div>
    )
}

export default Introduction
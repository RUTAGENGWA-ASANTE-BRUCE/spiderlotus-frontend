import React, { useState } from "react";
import "./middleImage.css";
import styled, { keyframes } from "styled-components";

function MiddleImage() {
  const slider = keyframes`
        0%{
            background-image: linear-gradient(rgb(33, 95, 209) , rgb(243 244 246)); 
        }
        35%{
            background-image: linear-gradient(rgb(114, 212, 44) , rgb(243 244 246)); 
        }
        75%{
            background-image: linear-gradient(rgb(209, 130, 33) , rgb(243 244 246)); 
       }
    `;
  const [leftImage, setLeftImage] = useState("products.png");
  const [rightImage, setRightImage] = useState("thinking.png");
  const [gradient, setGradient] = useState(
    " linear-gradient(rgb(250, 95, 116) , rgb(243 244 246))"
  );
  const UpImages = styled.div`
    height: 16rem;
    flex-direction: row;
    justify-content: space-evenly;
    background-image: ${gradient};
  `;
  const [text, setText] = useState("Buy products of your choice");

  const change = () => {
    function one() {
      setText("Ready to ship products");
    }
    function two() {
      setText("Toys & Games");
    }
    function three() {
      setText("Best payment facilities");
    }
    function four() {
      setText("Buy products of your choice");
    }
    if (text === "Buy products of your choice") {
      setTimeout(one, 5000);
      setTimeout(() => {
        setGradient("linear-gradient(rgb(209, 130, 33) , rgb(243, 244, 246))");
      }, 5000);
      setTimeout(() => {
        setLeftImage("shipping.png");
      }, 5000);
      setTimeout(() => {
        setRightImage("boxes1.png");
      }, 5000);
    } else if (text === "Ready to ship products") {
      setTimeout(two, 5000);
      setTimeout(() => {
        setGradient("linear-gradient(rgb(114, 212, 44) , rgb(243, 244 ,246))");
      }, 5000);
      setTimeout(() => {
        setLeftImage("toy.png");
      }, 5000);
      setTimeout(() => {
        setRightImage("gamesTwo.png");
      }, 5000);
    }
    if (text === "Toys & Games") {
      setTimeout(three, 5000);
      setTimeout(() => {
        setGradient("linear-gradient(rgb(33, 95, 209) , rgb(243 ,244 ,246))");
      }, 5000);
      setTimeout(() => {
        setLeftImage("currency.png");
      }, 5000);
      setTimeout(() => {
        setRightImage("bankCards.png");
      }, 5000);
    }
    if (text === "Best payment facilities") {
      setTimeout(four, 5000);
      setTimeout(() => {
        setGradient("linear-gradient(rgb(250,95,116) , rgb(243 ,244 ,246))");
      }, 5000);
      setTimeout(() => {
        setLeftImage("products.png");
      }, 5000);
      setTimeout(() => {
        setRightImage("thinking.png");
      }, 5000);
    }
  };

  return (
    <UpImages className={"grid  sm:flex w-[100%] flex-row justify-between border-b-2 sm:border-none"}>
      <img src={leftImage} alt="" className=" my-4 h-[180px]  contain sm:flex hidden" />
      <p className="mt-5 m-auto sm:mt-20  font-semibold xl:text-xl text-white sm:m-2 ">{text}</p>
      <img src={rightImage} alt="" className="my-4 sm:h-[200px] h-[180px] contain " />
      {change()}
    </UpImages>
  );
}

export default MiddleImage;

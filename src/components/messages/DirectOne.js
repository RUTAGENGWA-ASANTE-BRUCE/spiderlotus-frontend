import React, { useState, useEffect } from "react";
import userResources from "../dbResources/axios";
import "../../app2.css"
function DirectOne({
  person,
  setRoom,
  setReceiverEmail,
  setReceiverUserName,
  senderRoomName,
  setReceiverId,
  userId,
  users,
  setPhoneResponsive,
  setPhoneResponsive2,

}) {
  const allMessages = users.find((user) => user._id === person._id).messages;

  return (
    <div
      className="flex flex-row text-[12px] xl:text-sm  mr-2 my-1 hover:cursor-pointer rounded-md py-1 pl-0.5 w-[85%] xl:w-[90%]   hover:border-black  border-2 border-white"
      onClick={() => {
        let sum1 = 0;
        
        senderRoomName.split("").map((char) => {
          if (char === "1") {
            sum1 += 1;
          }
          if (char === "2") {
            sum1 += 2;
          }
          if (char === "3") {
            sum1 += 3;
          }
          if (char === "4") {
            sum1 += 4;
          }
          if (char === "5") {
            sum1 += 5;
          }
          if (char === "6") {
            sum1 += 6;
          }
          if (char === "7") {
            sum1 += 7;
          }
          if (char === "8") {
            sum1 += 8;
          }
          if (char === "9") {
            sum1 += 9;
          }
          if (char === "0") {
            sum1 += 0;
          }
        });
        let sum2 = 0;
        person.messageRoom.split("").map((char) => {
          if (char === "1") {
            sum2 += 1;
          }
          if (char === "2") {
            sum2 += 2;
          }
          if (char === "3") {
            sum2 += 3;
          }
          if (char === "4") {
            sum2 += 4;
          }
          if (char === "5") {
            sum2 += 5;
          }
          if (char === "6") {
            sum2 += 6;
          }
          if (char === "7") {
            sum2 += 7;
          }
          if (char === "8") {
            sum2 += 8;
          }
          if (char === "9") {
            sum2 += 9;
          }
          if (char === "0") {
            sum2 += 0;
          }
        });
        // console.log(`sum1 is ${sum1} and sum2 is ${sum2}`)
        setRoom(sum1 + sum2);
        setReceiverUserName(person.userName);
        setReceiverEmail(person.email);
        setReceiverId(person._id);
        setPhoneResponsive("hidden");
        setPhoneResponsive2("flex");
        // console.log(person._id);
      }}
    >
      <div className="flex flex-row w-full">
        <div className=" mt-1">
          <img
            className="h-8 w-8 rounded-full "
            alt={person.userName}
            src={person.profilePicture}
          />
        </div>
        <div className="flex flex-col  w-full ml-1 ">
          <h1 className="w-[96%] truncate ">{person.userName}</h1>
          <div className="flex flex-row w-full  justify-between">

          <h1 className="text-gray-500 ">
            {(function () {
              let toReturn = "";
              //Loop through all messages that have this person's _id
              let ourMessages = allMessages.filter(
                (message) =>
                  message.receiverId === userId || message._id === userId
              );
              return ourMessages.length > 0
                ? ourMessages[ourMessages.length - 1]._id === userId
                  ? "You: " + ourMessages[ourMessages.length - 1].message
                  : ourMessages[ourMessages.length - 1].message
                : "";
            })()}
          </h1>
          <h1 className="">
          {(function () {
            let toReturn = "";
            //Loop through all messages that have this person's _id
            let ourMessages = allMessages.filter(
              (message) =>
                message.receiverId === userId || message._id === userId
            );

            return ourMessages.length > 0
              ? ourMessages[ourMessages.length - 1].timeStamp
              : "";
          })()}
        </h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default DirectOne;

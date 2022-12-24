import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import "../../app2.css";
import userResources from "../dbResources/axios";

function SearchOption({
  displayComponent,
  searchValue,
  setDisplaySearchComponent,
  setReceiverEmail,
  setReceiverUserName,
  setRoom,
  senderRoomName,
  userId,
  setPhoneResponsive,
  setPhoneResponsive2 
}) {
  const { userToken, users,myData,setMyData } = useContext(AppContext);
  return (
    <div
      className={` bg-gray-200 glassy flex-col ${displayComponent} absolute p-2 overflow-y-scroll`}
    >
      {users
        ? users
            .filter((user) =>
              user.userName
                .toLowerCase()
                .includes(searchValue.toString().toLowerCase()) && user.userName!=myData.userName
            )
            .map((user) => (
              <div
                className="flex flex-row  text-xs mr-2 my-1 cursor-pointer  rounded-md p-1 w-11/12  hover:border-black  border-2 "
                onClick={() => {
                  userResources.post(`/users/${userId}`, {
                    directPeople: [
                      {
                        userName: user.userName,
                        profilePicture: user.profilePicture,
                        email: user.email,
                        _id: user._id,
                        messageRoom: user.messageRoom,
                      },
                    ],
                  });
                  let myDirectPeople=myData.directPeople
                  myDirectPeople.push(user)
                  setMyData((prevState)=>{return{...prevState,directPeople:myDirectPeople }});
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
                  user.messageRoom.split("").map((char) => {
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
                  console.log(`sum1 is ${sum1} and sum2 is ${sum2}`);
                  setRoom(sum1 + sum2);
                  setReceiverUserName(user.userName);
                  setReceiverEmail(user.email);
                  setDisplaySearchComponent("hidden");
                  setPhoneResponsive("hidden");
        setPhoneResponsive2("flex");
                }}
              >
                <img
                  className="h-8 w-8 mt-1 rounded-full "
                  alt={`${user.userName}'s profilePicture`}
                  src={"avatar4.jpg"}
                />
                <div className="flex flex-col  mt-1 ml-1">
                  <h5 className="w-full truncate">{user.userName}</h5>
                  <h5 className=" w-full truncate ml-0.5">{user.email}</h5>
                </div>
              </div>
            ))
        : ""}
    </div>
  );
}

export default SearchOption;

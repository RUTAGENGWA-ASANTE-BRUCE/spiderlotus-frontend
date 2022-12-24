import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import io from "socket.io-client";
import PlusIcon from "@heroicons/react/solid/PlusIcon";
import { AppContext } from "../../App";
import MessageIcon from "@heroicons/react/solid/PaperAirplaneIcon";
import userResources from "../dbResources/axios";
import SearchOption from "./searchOption";
import ArrowLeft from "@heroicons/react/solid/ArrowNarrowLeftIcon";
import Channel from "./Channel";
import DirectOne from "./DirectOne";
import DirectOneLoader from "./DirectOneLoader";
import ScrollToBottom from "react-scroll-to-bottom";
import { Link, Navigate, useLocation,useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader"
import "../../app2.css";

const socket = io.connect("https://spiderlotus-backend.herokuapp.com/");

function Messages() {
  const location = useLocation();
  const { userToken, users, myData, messageList, userId, setMessageList,setUsers } =
    useContext(AppContext);

  const [receiverUserName, setReceiverUserName] = useState();
  const [receiverEmail, setReceiverEmail] = useState();
  const [room, setRoom] = useState("");
  const [receiverId, setReceiverId] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [phoneResponsive, setPhoneResponsive] = useState("flex");
  const [phoneResponsive2, setPhoneResponsive2] = useState("hidden");
  const [displaySearchComponent, setDisplaySearchComponent] =
    useState("hidden");
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  
  useEffect(() => {
    async function fetchData() {
      socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data]);
      });
    }
    fetchData();
  }, [users]);

  const joinRoom = () => {
    socket.emit("join_room", room);
  };
  console.log(users);
  async function sendMessage() {
    if (newMessage !== "") {
      setLoading(true)
      const messageData = {
        sender: myData.userName,
        _id: userId,
        profilePicture: myData.profilePicture,
        senderId: socket.id,
        receiverId: receiverId,
        message: newMessage,
        room: room,
        timeStamp:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      const sentMessage1=await userResources.post(`/users/${userId}`, { messages: [messageData] });
      const sentMessage2=await userResources.post(`/users/${receiverId}`, { messages: [messageData] });
      if(sentMessage1 && sentMessage2){
        setLoading(false)
        
        users.find((user) => user._id === receiverId).messages.push(sentMessage1);
        // setUsers((prevState)=>{return[...prevState,prevState.find((user) => user._id === receiverId).messages.push(sentMessage1)]});
        // const newUsersUpdated=[...users];
        // newUsersUpdated.filter((user) => user._id === receiverId)[0]={
        //    ...newUsersUpdated.filter((user) => user._id === receiverId)[0],
        //    directPeople:[...newUsersUpdated.filter((user) => user._id === receiverId)[0].directPeople,sentMessage1]
        // }
        // setUsers(newUsersUpdated)
        setMessageList((list) => [...list, sentMessage1.data.messages[0]]);
        await socket.emit("send_message", messageData);
        console.log({ messages: [messageData] });
        setNewMessage("");
      }
    }
  }
  const searchRef = useRef(null);
  const messageRef=useRef(null)

  return userToken ? (
    <div className="flex flex-row bg-white mx-2 my-5 rounded-sm w-full ">
      {myData ? (
        <SearchOption
          displayComponent={`${displaySearchComponent} `}
          searchValue={searchValue}
          setDisplaySearchComponent={setDisplaySearchComponent}
          setReceiverEmail={setReceiverEmail}
          setReceiverUserName={setReceiverUserName}
          senderRoomName={myData.messageRoom}
          setRoom={setRoom}
          userId={userId}
          setPhoneResponsive={setPhoneResponsive}
          setPhoneResponsive2={setPhoneResponsive2}
        />
      ) : (
        ""
      )}
      <div className={ `${phoneResponsive} md:flex  flex-col md:w-[25%] w-full text-[10px] xl:text-base border-r-2 pb-10 border-black border-opacity-30 `}>
        {joinRoom()}
        <form className="mt-10 ml-5">
          <input
            onFocus={() => setDisplaySearchComponent("flex")}
            ref={searchRef}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="search"
            className="bg-gray-200 p-2 w-11/12 "
          />
        </form>
        <div className="mt-5 flex flex-col ml-5 w-full mr-1 ">
          <h1 className="text-sm xl:text-base">Direct Messages</h1>
          <div className="gap-y-1 w-full flex flex-col" onClick={()=>{messageRef.current.focus()}}>

          {myData
            ? myData.directPeople && myData.directPeople.map((person) => (
                <DirectOne
                  person={person}
                  setReceiverUserName={setReceiverUserName}
                  setReceiverEmail={setReceiverEmail}
                  setRoom={setRoom}
                  senderRoomName={myData.messageRoom}
                  setReceiverId={setReceiverId}
                  userId={userId}
                  users={users}
                  setPhoneResponsive={setPhoneResponsive}
          setPhoneResponsive2={setPhoneResponsive2}
                />
              ))
            : (
              <div>
              <DirectOneLoader />
              <DirectOneLoader />
              <DirectOneLoader />
              <DirectOneLoader />
            </div>
            )}
          </div>

          <button className="flex flex-row hover:text-gray-500 mt-2">
            <PlusIcon
              fontSize="small"
              className="bg-gray-200 h-6 w-6 p-0.5 mx-1"
            />
            <h1
              className="font-semibold"
              onClick={() => {
                searchRef.current.focus()
              }}
            >
              Add people or company
            </h1>
          </button>
        </div>
        <div className="mt-5 flex flex-col ml-5 w-full mr-1">
          <h1 className="">Channels</h1>
          {myData ? myData.length > 0
            ? myData.channels.map((channel) => (
                <Channel
                  channel={channel}
                  setRoom={setRoom}
                  setReceiverUserName={setReceiverUserName}
                  setReceiverEmail={setReceiverEmail}
                      setPhoneResponsive={setPhoneResponsive}
          setPhoneResponsive2={setPhoneResponsive2}
                />
              ))
            : "":
            ( <div>
              <DirectOneLoader />
              <DirectOneLoader />
              <DirectOneLoader />
              <DirectOneLoader />
            </div>)
            }

          <button className="flex flex-row hover:text-gray-500 mt-2">
            <PlusIcon
              fontSize="small"
              className="bg-gray-200 h-6 w-6 p-0.5 mx-1"
            />
            <h1
              className="font-semibold"
              onClick={() => {
                searchRef.current.focus();
              }}
            >
              Add Channel
            </h1>
          </button>
        </div>
      </div>
      {room !== "" ? (
        <div className={`${phoneResponsive2} md:flex flex-col md:w-[75%] sm:w-full  `}>
          <div className="flex flex-row  w-fit m-auto">
          <button onClick={()=>{setPhoneResponsive("flex");setPhoneResponsive2("hidden");console.log("hello bruce")}} >
        <ArrowLeft className="h-7 text-green-500 mr-5 mt-5 flex md:hidden" />
          </button>
            <div className="flex flex-col  w-fit">
          <h1 className="font-bold mt-1 text-xl w-fit m-auto">{receiverUserName}</h1>
          <h1 className="w-fit m-auto ">{receiverEmail}</h1>
            </div>
          </div>
          <ScrollToBottom className={"h-[300px] md:h-[480px] w-[97%] m-auto md:m-0 md:w-full "}>
            <div className=" mt-2  bg-gray-200 pt-2  pb-2 w-full ">
              {messageList.length > 0
                ? messageList
                    .filter((one) => one.room === room)
                    .map((oneMessage) => {
                      return (
                        <div
                          className={
                            socket.id === oneMessage.senderId ||
                            userId === oneMessage._id
                              ? `flex my-1 flex-row-reverse anotherSender w-6/12 pr-7 `
                              : `flex flex-row  w-6/12  ml-5 my-1 `
                          }
                        >
                          <img
                            className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                            alt="hello"
                            src={oneMessage.profilePicture}
                          />
                          <div className="flex flex-col text-[9px] md:text-base w-8/12 md:w-6/12 mt-2 mx-2">
                            <h1
                              className={
                                socket.id === oneMessage.senderId ||
                                userId === oneMessage._id
                                  ? `bg-gray-100  p-2 rounded-md `
                                  : `bg-gray-300 p-2 rounded-md`
                              }
                            >
                              <span className="  ">{oneMessage.message}</span>
                            </h1>
                            <h1
                              className={
                                socket.id === oneMessage.senderId ||
                                userId === oneMessage._id
                                  ? `mt-2 `
                                  : `mt-2 receiverTimeStamp `
                              }
                            >
                              {oneMessage.timeStamp}
                            </h1>
                          </div>
                        </div>
                      );
                    })
                : ""}
            </div>
          </ScrollToBottom>

          <div className="mb-3">
            <input
              onChange={(e) => setNewMessage(e.target.value)}
              id="message"
              autoComplete="off"
              type="text"
              value={newMessage}
              placeholder="Type a message"
              className="md:ml-5 ml-2 p-2 mt-8 w-44 md:w-80 xl:w-96 border-2 rounded-sm border-black"
              ref={messageRef}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            <button
              onClick={(e) => sendMessage(e)}
              className="md:ml-5 ml-1.5 xl:text-base md:text-sm text-xs  mt-2 px-2 py-3.5  md:p-2 rounded-md hover:bg-gray-200 hover:text-black text-white bg-black"
            >
              Send a message
            </button>
            {loading?<div className="w-fit ml-3 my-3"><PulseLoader color={'#0ec45a'} loading={loading} size={15}   /></div>:""}

          </div>
        </div>
      ) : (
        <div className={`${phoneResponsive2} md:flex withoutRoom `}>
          <div className="my-52 m-auto w-96 ">
            <MessageIcon className="h-40 p-2 rotate-45  border-black rounded-full ml-28   border-2 " />
            <h4 className=" text-xl mt-7">
              Message Manufacturers and Other People
            </h4>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Navigate to={"/Signin"} replace state={{ from: location }} />
  );
}
export default Messages;

import React from "react";

function Channel({ channel, setRoom, setReceiverEmail, setReceiverUserName, setPhoneResponsive,
  setPhoneResponsive2 }) {
  return (
    <div
      className="flex flex-row mr-2 my-0.5 hover:cursor-pointer rounded-md p-1 w-full  hover:border-black  border-2 border-white"
      onClick={() => {
        setReceiverUserName(channel.channelName);
        setReceiverEmail("");
        setRoom(channel.roomName);
        setPhoneResponsive("hidden");
        setPhoneResponsive("flex");
 
      }}
    >
      <h1 className="ml-1">#</h1>
      <h1 className=" ml-3">{channel.channelName}</h1>
    </div>
  );
}

export default Channel;

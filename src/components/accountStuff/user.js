import userResources from "../dbResources/axios";
import React, { useContext } from "react";
import { AppContext } from "../../App";

function GetId() {
  const { userToken } = useContext(AppContext);
  let id = userResources.post("auth/token", { token: userToken });
  return id;
}

export default GetId;

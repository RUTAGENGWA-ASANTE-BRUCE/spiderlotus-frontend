import React, { useState, useEffect, useContext } from "react";
import "../../app2.css";
import In from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import { Link, Navigate, useLocation } from "react-router-dom";
import FaceBook from "@material-ui/icons/Facebook";
import userResources from "../dbResources/axios";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext } from "../../App";
import { DnsTwoTone } from "@material-ui/icons";
import GoogleLogin from "react-google-login"
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function SignUp() {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [displayErrorMessge, setDisplayErrorMessage] = useState("hidden");
  const [errorMessage, setErrorMessage] = useState("");
  // const from = location.state?.from?.pathname;
  const { userToken, defaultSettings } = useContext(AppContext);
  async function submitUser(data) {
    console.log(data);
    var roomId = uuidv4();
    var ava;
    const avatar = `https://avatars.dicebear.com/api/initials/${data.userName}.svg`;
    let newToken = await userResources.post("/auth/signup", {
      userName: data.userName,
      email: data.email,
      password: data.password,
      language: defaultSettings.language,
      currency: defaultSettings.currency,
      location: defaultSettings.location,
      profilePicture: avatar,
      messageRoom: roomId,
      cartList: [],
      savedList: [],
      messages: [],
      notifications: [],
      directPeople: [],
      channels: [],
    });

    console.log(newToken.data);
    if (newToken.data.hasOwnProperty("errorMsg")) {
      setDisplayErrorMessage("flex");
      setErrorMessage(newToken.data.errorMsg);
    } else {
      setCookie("token", newToken.data.token, 3);
      // navigate(from, { replace: true });
      document.location = "";
    }
    reset();
  }
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const location = useLocation();
  const handleFailure=(result)=>{
    alert(result)
  }
  const handleLogin=(result)=>{console.log(result)}
  return userToken ? (
    <Navigate to={"/"} replace state={{ from: location }} />
  ) : (
    <div className="bg-gray-100">
      <div className=" mt-4 mx-16 bg-white flex flex-row h-fit  shadow-sm    shadow-gray-400">
        <div className="loginLeft flex flex-col pb-3">
          <h1 className="signInText mt-20 font-semibold text-3xl">
            SIGN <span className="text-blue-400">UP</span>
          </h1>

          <form
            className="mt-10 flex flex-col"
            onSubmit={handleSubmit(submitUser)}
          >
            <input
              type="text"
              className="p-3 ml-56 nameEmail w-2/4 bg-gray-200"
              {...register("userName")}
              autoComplete="off"
              placeholder="userName"
              onFocus={() => {
                setDisplayErrorMessage("hidden");
              }}
              required
            />
            <input
              type="email"
              className="p-3 ml-56 password mt-10 w-2/4 bg-gray-200"
              placeholder="Email"
              onFocus={() => {
                setDisplayErrorMessage("hidden");
              }}
              {...register("email")}
              autoComplete="off"
              required
            />
            <p className={`ml-56 text-red-500`}>{errors.email?.message}</p>
            <input
              type="password"
              className="p-3 ml-56 password mt-10 w-2/4 bg-gray-200"
              autoComplete="off"
              placeholder="Password"
              onFocus={() => setDisplayErrorMessage("hidden")}
              {...register("password")}
              required
            />
            <p className={`ml-56 text-red-500 `}>{errors.password?.message}</p>

            <p className={`text-red-500 ml-56 mt-2`}>{errorMessage}</p>
            <button
              className="w-2/4 text-white mt-5 font-semibold ml-56 h-10 bg-blue-400"
              type="submit"
            >
              Submit
            </button>
          </form>
          <h1 className="orSignIn mt-5 font-semibold ">Or Sign Up with</h1>
          <div className="mt-10 ml-80 flex flex-row justify-between w-56">
            {/* <button className=" hover:bg-gray-200 w-8 h-8 rounded-full">
              <img src="google.png" alt="" className="h-5 w-5 ml-1.5" />
            </button> */}
            <GoogleLogin clientId=""
            buttonText=""
            className="w-10 hover:cursor-pointer"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}>

            </GoogleLogin>
            <button className=" hover:bg-gray-200 w-8 h-8 rounded-full">
              <In fontSize="small" className="text-blue-600" />
            </button>
            <button className=" hover:bg-gray-200 w-8 h-8 rounded-full">
              <Twitter fontSize="small" className="text-blue-300" />
            </button>
            <button className=" hover:bg-gray-200 w-8 h-8 rounded-full">
              <FaceBook fontSize="small" className="text-blue-900" />
            </button>
          </div>
          <button
            className="w-2/4 text-black mt-5 font-semibold ml-56 h-10 bg-blue-200"
            type="submit"
          >
            Already Registered ?
            <Link to={"/Signin"}>
              {" "}
              <span className="text-blue-400">Sign In</span>
            </Link>
          </button>
        </div>
        <div className="loginRight ">
          <img className="w-full h-full" alt="" src="city.jpg" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

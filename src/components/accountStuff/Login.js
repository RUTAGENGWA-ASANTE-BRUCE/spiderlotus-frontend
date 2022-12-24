import React, { useState, useContext } from "react";
import "../../app2.css";
import In from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import FaceBook from "@material-ui/icons/Facebook";
import { Link, Navigate, useLocation } from "react-router-dom";
import userResources from "../dbResources/axios";
import { AppContext } from "../../App";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function Login() {
  const [displayErrorMessge, setDisplayErrorMessage] = useState("hidden");
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  async function submitLogin(data) {
    let newToken = await userResources.post("/auth/login", {
      email: data.email,
      password: data.password,
    });
    console.log(newToken);
    console.log(newToken.data);
    if (newToken.data.hasOwnProperty("errorMsg")) {
      setDisplayErrorMessage("flex");
      setErrorMessage(newToken.data.errorMsg);
    } else {
      setCookie("token", newToken.data.token, 3);
      // if(location.state?.from){

      // }
      // navigate(location.state.from);
      document.location = "";
      reset();
    }
  }
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { userToken } = useContext(AppContext);

  return userToken ? (
    <Navigate to={"/"} replace state={{ from: location }} />
  ) : (
    <div className="bg-gray-100">
      <div className="mb-14 mt-3 mx-16 bg-white flex flex-row h-fit shadow-sm   shadow-gray-400   ">
        <div className="loginLeft flex flex-col pb-20">
          <h1 className="signInText mt-20 font-semibold text-3xl">
            SIGN <span className="text-blue-400">IN</span>
          </h1>

          <form
            className="mt-10 flex flex-col"
            onSubmit={handleSubmit(submitLogin)}
          >
            <input
              type="email"
              autoComplete="off"
              className="p-3 ml-56 nameEmail w-2/4 bg-gray-200"
              placeholder="userName or Email"
              {...register("email")}
              onFocus={() => setDisplayErrorMessage("hidden")}
              required
            />
            <p className={`ml-56 text-red-500`}>{errors.email?.message}</p>

            <input
              type="password"
              autoComplete="off"
              className="p-3 ml-56 password mt-10 w-2/4 bg-gray-200"
              {...register("password")}
              placeholder="Password"
              onFocus={() => setDisplayErrorMessage("hidden")}
              required
            />
            <div className={`ml-56 flex flex-row ${displayErrorMessge}`}>
              <p className={`text-red-500  mt-2 `}>{errorMessage}</p>
              <h1 className="ml-2 mt-2 text-blue-400 hover:cursor-pointer">
                Forgot password ?
              </h1>
            </div>
            <button
              className="w-2/4 text-white mt-5 font-semibold ml-56 h-10 bg-blue-400"
              type="submit"
            >
              Submit
            </button>
          </form>
          <h1 className="orSignIn mt-5 font-semibold ">Or Sign In with</h1>
          <div className="mt-10 ml-80 flex flex-row justify-between w-56">
            <button className=" hover:bg-gray-200 w-8 h-8 rounded-full">
              <img src="google.png" alt="" className="h-5 w-5 ml-1.5" />
            </button>
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
            New Customer ?{" "}
            <Link to={"/Signup"}>
              <span className="text-blue-400">Sign Up</span>
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

export default Login;

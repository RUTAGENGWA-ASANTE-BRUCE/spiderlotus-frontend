import "./App.css";
import { useState, useEffect, createContext,useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiddleImage from "./components/imagery/middleImage";
import Introduction from "./components/introduction/introduction";
import Down from "./components/down/down";
import Cart from "./components/cart/cart";
import LoggedIn from "./components/loggedIn/loggedIn";
import Orders from "./components/orders/orders";
import Each from "./components/products/each";
import Login from "./components/accountStuff/Login";
import SignUp from "./components/accountStuff/SignUp";
import Messages from "./components/messages/Messages";
import Payment from "./components/paymentFinal/payment";
import Notifications from "./components/notifications/Notifications";
import Returns from "./components/returns/Returns";
import userResources from "./components/dbResources/axios";
import NavBar from "./components/navBar/header";
import Products from "./components/products/Products"
import EachLoader from "./components/products/eachLoader"
import FileNotFound from "./components/fileNotFound/FileNotFound"
export const AppContext = createContext({});

var userToken;
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  var user = getCookie("token");
  if (user != "") {
    userToken = getCookie("token");
  } else {
    console.log("");
  }
}
checkCookie();
function App() {
  const [userId, setUserId] = useState();
  const [orders, setOrders] = useState();
  const [myData, setMyData] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [searchValue,setSearchValue]=useState();
  const [overallPrice, setOverallPrice] = useState(0);
  const [savedItems, setSavedItems] = useState();
  const [defaultSettings, setDefaultSettings] = useState({});
  const [messageList, setMessageList] = useState([]);
  const [cartItems, setCartItems] = useState();
  const [users, setUsers] = useState([]);
  const [paymentItems, setPaymentItems] = useState([]);
  const [paymentOverallPrice, setPaymentOverallPrice] = useState();
  const [products,setProducts]=useState()
  const [productTypes,setProductTypes]=useState();
  const [,updateState] = useState()
  const forceUpdate=useCallback(()=>updateState({}),[])
  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{
        setProducts(data)
      })
      let allProductTypes= await userResources.get("/productTypes");
      allProductTypes && setProductTypes(allProductTypes.data)
      let allUsers = await userResources.get("/users");
      allUsers && setUsers(allUsers.data)
      let defaultData = await userResources.get("/default");
      defaultData && setDefaultSettings(defaultData.data);
      let userRealId = await userResources.post("/auth/token", {
        token: userToken,
      });
      if (userRealId) {
        setUserId(userRealId.data.userId)
        setMyData(allUsers.data.find((user) => user._id == userRealId.data.userId));
        setMessageList(allUsers.data.find((user) => user._id == userRealId.data.userId).messages);
        var myOrders = await userResources.get(`/orders/${userRealId.data.userId}`);
        setOrders(myOrders.data);
        setSavedItems(allUsers.data.find((user) => user._id == userRealId.data.userId).savedList);
        setCartItems(allUsers.data.find((user) => user._id == userRealId.data.userId).cartList);
      }
      let allItems = 0;

  let allPrice = 0;
  allUsers.data.find((user) => user._id == userRealId.data.userId).cartList.map((value) => {
    allItems += value.quantity;
    allPrice += value.totalPrice;
    setOverallPrice(allPrice);
    setTotalItems(allItems);
  });
    }
    setTimeout(fetchData, 1000);
  }, []);
  return (
    <AppContext.Provider
      value={{
        userToken: (userToken) ? userToken : null,
        users: (users) ? users : [],
        defaultSettings: (defaultSettings) ? defaultSettings : null,
        userId: (userId) ? userId : null,
        myData: (myData) ? myData : undefined,
        messageList: (messageList) ? messageList : [],
        setMessageList: (setMessageList) ? setMessageList : ()=>{},
        orders: (orders) ? orders : undefined,
        setOrders: (setOrders) ? setOrders : ()=>{},
        cartItems: (cartItems) ? cartItems : undefined,
        setCartItems: (setCartItems) ? setCartItems : ()=>{},
        savedItems: (savedItems) ? savedItems : undefined,
        setSavedItems: (setSavedItems) ? setSavedItems : ()=>{},
        overallPrice: (overallPrice) ? overallPrice : null,
        setOverallPrice: (setOverallPrice) ? setOverallPrice : ()=>{},
        totalItems: (totalItems) ? totalItems : null,
        setTotalItems: (setTotalItems) ? setTotalItems : ()=>{},
        paymentItems: (paymentItems) ? paymentItems : null,
        setPaymentItems: (setPaymentItems) ? setPaymentItems : ()=>{},
        paymentOverallPrice: (paymentOverallPrice) ? paymentOverallPrice : null,
        setPaymentOverallPrice: (setPaymentOverallPrice) ? setPaymentOverallPrice : ()=>{},
        products: (products) ? products : undefined,
        productTypes: (productTypes) ? productTypes : undefined,
        searchValue: (searchValue) ? searchValue :undefined,
        setUsers: (setUsers) ? setUsers :()=>{},
        setMyData: (setMyData) ? setMyData :()=>{},
        setSearchValue: (setSearchValue) ? setSearchValue :()=>{},
        forceUpdate
      }}
    >
      <BrowserRouter>
        {/* {(window.location.pathname !== "/login" && window.location.pathname !== "/signup") ? <Header /> : ""} */}

        <NavBar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={
              <div className="flex flex-row">
                <LoggedIn />
                <Cart />
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="flex flex-row">
                <LoggedIn />
                <Orders />
              </div>
            }
          />
          
          {products ? products.map((one, i) => (
            <Route
              path={`/products/${one.id}`}
              element={<Each product={one} />}
            />
          )):<Route path={"/products/:productId"} element={<EachLoader />} />}
          <Route path="/Signin" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path={"payment"} element={<Payment />} />

          <Route
            path="/Messages"
            element={
              <div className="flex flex-row">
                <LoggedIn />
                <Messages />
              </div>
            }
          />
          <Route
            path={"/notifications"}
            element={
              <div className="flex flex-row">
                <LoggedIn />
                <Notifications />
              </div>
            }
          />
          <Route
            path={"/returns"}
            element={
              <div className="flex flex-row">
                <LoggedIn />
                <Returns />
              </div>
            }
          />
        <Route path={"/*"} element={<FileNotFound />} />
        </Routes>
        {window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup" ? (
          <Down />
        ) : (
          " "
        )}
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

import react,{useState,useEffect,useContext} from 'react'
import {AppContext} from "../../App.js"
import userResources from "../dbResources/axios.js"
import NotificationIcon from "@material-ui/icons/Notifications"
import OneNotification from "./oneNotification"
import OneNotificationLoader from "./oneNotificationLoader"
import { Link,Navigate,location,useLocation } from "react-router-dom";

function Notifications(){
    const {userToken}=useContext(AppContext)
    const [userId, setUserId] = useState();
    const [notifications,setNotifications]=useState();
  const location = useLocation();
    
    useEffect(()=>{
        async function fetchData(){
            let userRealId = await userResources.post(`/auth/token`, {
                token: userToken,
              });
              userRealId ? setUserId(userRealId.data.userId) : console.log("no Id got");
              let myDataResponse;
              userId? (myDataResponse = await userResources.get(`/users/${userId}`))
                : console.log("no myData respnse got");
              myDataResponse
                ? setNotifications(myDataResponse.data.notifications)
                : console.log("no my Data");
        }
    })
    return(userToken?
    <div className="flex flex-col py-3 w-full">
         <div className="flex flex-col ml-6 md:ml-16 xl:ml-32 sm:ml-16">
         <h1 className="text-2xl font-bold text-black">Notifications <NotificationIcon fontSize={"large"} /></h1>
         <div className="w-16 h-1.5 bg-blue-400 rounded-xl"/>
         </div>
         <div className="mt-8 flex flex-col text-xs sm:text-sm md:text-base">
              <OneNotification main1={"PROMO CODE"} main2={"131424"} minor1={"Don't forget to use"} minor2="" image={"/clothes1.png"} time={"12:00 AM"} type={4}/>
              <OneNotification main1={"50% OFF"} minor1={"in Ultraboost All Terrain Ltd Shoes !!"} main2="" minor2="" image={"/clothes2.png"} time={"12:00 AM"} type={1}/>
              <OneNotification main1="" minor1={"One step ahead with new"} main2={"Stylish collections"} minor2={"every week"} image={"/clothes3.png"} time={"2:00 PM"} type={2}/>
              <OneNotification main1={"1234678"} minor1={"Package from your order"} minor2={"has"} main2={"arrived"} image={"/game1.png"} time={"4:52 AM"} type={3}/>
              <OneNotification main1={"PROMO CODE"} main2={"131424"} minor1={"Don't forget to use"} minor2="" image={"/clothes1.png"} time={"12:00 AM"} type={4}/>
              <OneNotification main1={"1234678"} minor1={"Package from your order"} minor2={"has"} main2={"arrived"} image={"/game1.png"} time={"4:52 AM"} type={3}/>
              <OneNotification main1={"50% OFF"} minor1={"in Ultraboost All Terrain Ltd Shoes !!"} main2="" minor2="" image={"/clothes2.png"} time={"12:00 AM"} type={1}/>
              <OneNotificationLoader />
         </div>
    </div>:
      <Navigate to={"/Signin"} replace state={{from:location}} />
    
    )
}
export default Notifications
import UserCard from "../Components/UserCards/UserCard";
import UserTable from "../Components/UserTable/UserTable";
import UserForms from "../Components/UserForms/UserForms";
import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import { useState } from "react";
const UserInfo = (props) => {
  const { currentTab } = props;
  console.log("currentTab", currentTab);
  const [userData, setUserData] = useState([]);

  let currentPage = <div> Select current Page </div>;
  if (currentTab === "UserEnter") {
   
        currentPage = <UserForms userData={userData} setUserData={setUserData} />;
  
  
  }  else if (currentTab === "UserTable") {
   
    currentPage =    <UserTable userData={userData} />
    
  }

  else if (currentTab === "UserCards") {
   
    currentPage =  <UserCard userData={userData} />

}
  return <>
    {currentPage}
  </>;
};

export default UserInfo;

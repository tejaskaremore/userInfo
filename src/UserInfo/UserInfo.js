import UserCard from "../Components/UserCards/UserCard";
import UserForms from '../Components/UserForms/UserForms';
import UserTable from "../Components/UserTable/UserTable";
import { Stack } from "@mui/system";
import Divider from '@mui/material/Divider';
import { useState } from "react";

const UserInfo = (props) => {

  const { currentTab } = props;
  console.log('currentTab', currentTab);

  const [userData, setUserData] = useState([]);

  let Currentpage = <div>select Default Value</div>

  if (currentTab === 'UserEnter') {

    return (
    Currentpage=  <UserForms userData={userData} setUserData={setUserData} />
    )

  } else if (currentTab === 'UserTable') {

    return (
      Currentpage=  <UserTable userData={userData} />
    )

  } else if (currentTab === 'UserCards') {
    return (
  
     Currentpage= <UserCard userData={userData} />
)

  }

  return (

    <>

    { Currentpage}

    </>
  );
};
export default UserInfo;
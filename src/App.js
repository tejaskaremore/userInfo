import Header from "./Components/Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import { Container, Stack } from "@mui/material";
import "./App.scss";
import { useState } from "react";

function App() {
  const [ currentTab, setCurrenTab] = useState('userForm');
  return (
    <div className="App">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={0.5}
      >
        <Header currentTab={currentTab} setCurrenTab={setCurrenTab} />
        <Container fixed>
          <UserInfo currentTab={currentTab}/>
        </Container>
      </Stack>
    </div>
  );
}

export default App;

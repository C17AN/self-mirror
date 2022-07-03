import styled from "@emotion/styled";
import React, { useState } from "react";
import FloatingButton from "./components/common/FloatingButton";
import Mirror from "./components/Mirror";
import { AiFillSetting } from "react-icons/ai";
import Setting from "./components/Setting";

function App() {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  return (
    <Container className="App">
      <Mirror showReversedVideo={true} />
      <FloatingButton
        icon={<AiFillSetting size={24} />}
        onClick={() => setIsSettingModalOpen(true)}
      />
      {isSettingModalOpen && <Setting handleClose={() => setIsSettingModalOpen(false)} />}
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  overflow: hidden;
`;

export default App;

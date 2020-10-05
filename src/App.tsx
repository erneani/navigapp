import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Keyboard, Rail } from "./components/Containers";

function App() {
  // Initial focus is on the menu component
  // Focus will never be null
  const [focusedContainer, setFocusedContainer] = useState("menu");
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Container>
      <Menu
        isContainerFocused={focusedContainer === "menu"}
        changeSection={setFocusedContainer}
      />
      <Keyboard
        isContainerFocused={focusedContainer === "keyboard"}
        changeSection={setFocusedContainer}
        setSearchKeyword={setSearchKeyword}
      />
      <Rail
        isContainerFocused={focusedContainer === "rail"}
        changeSection={setFocusedContainer}
        searchKeyword={searchKeyword}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default App;

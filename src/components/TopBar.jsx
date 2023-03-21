import styled from "styled-components";
import topo from "../assets/topo.jpg";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Sidebar } from "./allSidebar/sideBar";

export default function TopBar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <TopBarStyle>
        <Img src={topo}></Img>
        <Option onClick={showSidebar}>
          {sidebar ? (
            <FaTimes style={{ color: "white" }}></FaTimes>
          ) : (
            <HiBars3CenterLeft style={{ color: "white" }}></HiBars3CenterLeft>
          )}
        </Option>
        <Title>Cardápio Virtual</Title>
      </TopBarStyle>
      {sidebar && <Sidebar active={sidebar}></Sidebar>}
    </>
  );
}

const Title = styled.div`
  font-family: "Bad Script", cursive;
  position: fixed;
  font-size: 28px;
  font-weight: 500;
  left: calc(50% - 68px);
  top: 16px;
  color: white;
`;

const Option = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 9px;
  left: 8px;
  font-size: 28px;
  border: 1px white solid;
  border-radius: 4px;
  cursor: pointer;
`;

const TopBarStyle = styled.div`
  z-index: 2;
  width: 100%;
  height: 58px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 9px 2px black;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";
import topo from "../assets/topo.jpg";
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { FaTimes } from 'react-icons/fa';
import { useState } from "react";
import { Sidebar } from "./allSidebar/sideBar";

export default function TopoAndFooter() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar (){
    setSidebar(!sidebar)
  }
  
  return (
    <>
      <Top>
        <Img src={topo} alt="top"></Img>
        <Option onClick={showSidebar}>
          {sidebar ?  <FaTimes style={{"color": 'white'}}></FaTimes> 
          : <HiBars3CenterLeft style={{"color": 'white'}}></HiBars3CenterLeft>}
        
        </Option>
        <Title>Cardápio Virtual</Title> 
      </Top>
      {sidebar && <Sidebar active={sidebar}></Sidebar>}
      
      <Footer>
        <Img src={topo} alt="top"></Img>
      </Footer>
    </>
  );
}


const Title = styled.div`
font-family: 'Bad Script', cursive;
position: fixed;
font-size: 24px;
font-weight: 500;
left: calc(50% - 68px);
top: 12px;
color:white
`;

const Option = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  top: 11px;
  left: 8px;
  font-size: 25px;
  border: 1px white solid;
  border-radius: 4px;
  cursor: pointer
`;

const Footer = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 9px 2px black;
`;

const Top = styled.div`
  z-index: 2;

  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 9px 2px black;
`;

const Img = styled.img`
  width: 100%;
  height: 50px;
`;

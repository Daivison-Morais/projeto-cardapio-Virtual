import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginAdm from "./LoginAdm";

export function Sidebar({ active }) {

  const [boxAccess, setBoxAccess] = useState(false);

  const navigate = useNavigate();
  return (
    <Container sidebar={active}>  
      {boxAccess? <LoginAdm> </LoginAdm> :  <SidebarItem  Icon={FaUserAlt} Text={"Entrar como Administrador"} setState={setBoxAccess} state={boxAccess}></SidebarItem>}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 58px;
  left: ${({ sidebar }) => (sidebar ? "0px" : "-100%")};
  z-index: 1;
  width: 52vw;
  height: 100vh;
  background-color:#1f1732;
  padding: 7px;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 43vw;
    }
  }
`;


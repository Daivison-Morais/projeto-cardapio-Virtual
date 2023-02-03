import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";
import { FaUserAlt } from "react-icons/fa";

export function Sidebar({ active }) {
  return (
    <Container sidebar={active}>
      <Content>
        <SidebarItem Icon={FaUserAlt} Text={"Entrar como Administrador"} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: ${({ sidebar }) => (sidebar ? "0px" : "-100%")};
  z-index: 1;
  width: 43vw;
  height: 100vh;
  background-color: #161726;
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

const Content = styled.div`
  margin: 7px;
`;

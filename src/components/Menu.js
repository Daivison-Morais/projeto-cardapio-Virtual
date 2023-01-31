import styled from "styled-components";
import topo from "../assets/topo.jpg";
export function Menu() {
  return (
    <>
      <Topo>
        <Img src={topo} alt="topo"></Img>
      </Topo>
      <Main></Main>
      <Footer>
        <Img src={topo} alt="topo"></Img>
      </Footer>
    </>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3px 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 50px;
`;

const Topo = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: brown;
`;

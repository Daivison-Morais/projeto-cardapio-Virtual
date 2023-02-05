import styled from "styled-components";
import topo from "../assets/topo.jpg";

export default function HorizontalBar({ children }) {
  return (
    <Footer>
      <Container>
        <Img src={topo}></Img>
        {children}
      </Container>
    </Footer>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
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

const Img = styled.img`
  width: 100%;
  height: 50px;
`;

import styled from "styled-components";
import topo from "../assets/topo.jpg";

export default function HorizontalBar({ children }) {
  return (
    <Footer>
      <Img src={topo}></Img>
      {children}
    </Footer>
  );
}

const Footer = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.6);

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

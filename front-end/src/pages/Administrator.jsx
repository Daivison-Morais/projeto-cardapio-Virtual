import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HorizontalBar from "../components/HorizontalBar";


export default function Administrator() {
    const navigate = useNavigate();
  return (
    <>
      <Main>
        <Options onClick={()=>{navigate("/requests")}}>Pedidos</Options>
        <Options onClick={()=>{navigate("/historic")}}>Histórico de Pedidos</Options>
        <Options onClick={()=>{navigate("/historic")}}>Gerar QrCode</Options>
      </Main>
      <HorizontalBar>
      </HorizontalBar>
    </>
  );
}

export const Main = styled.div`
  color: white;
  width: 100vw;
  min-height: 100vh;
  padding: 50px 15px;
  background-color: #ddd6ed;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #474b6c;
`;

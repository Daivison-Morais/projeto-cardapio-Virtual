import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Administrator() {
    const navigate = useNavigate();
  return (
    <>
      <Main>
        <Options onClick={()=>{navigate("/requests")}}>Predidos</Options>
        <Options onClick={()=>{navigate("/historic")}}>Histórico de Pedidos</Options>
      </Main>
    </>
  );
}

export const Main = styled.div`
  color: white;
  padding: 5px 20px;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #161726;
`;

export const Options = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 90vw;
  height: 40px;
  border-radius: 8px;
  background-color: #474b6c;
`;

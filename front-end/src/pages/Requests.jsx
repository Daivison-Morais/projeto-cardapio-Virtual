import { useContext, useEffect, useState } from "react";
import { getRequests } from "../services/requestsApi";
import HorizontalBar from "../components/HorizontalBar";
import CardLstRequests from "../components/CardLstRequest";
import styled from "styled-components";
import UserContext from "../components/UserContext";


export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    getRequests(token)
      .then((response) => {
        setRequests(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro de conexão");
      });
  }, [refresh]);

  setInterval(() => {
    setRefresh(!refresh);
  }, 10 * 1000);

  if (requests.length > 0) {
    requests.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else {
        return true;
      }
    });
  }

  return (
    <>
      {requests.length > 0 ? (
        <Main>
          {requests?.map((value) =>
            value.status === "finished" ? (
              ""
            ) : (
              <CardLstRequests
                value={value}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            )
          )}
        </Main>
      ) : (
        <Center>Sem pedidos por enquanto :)</Center>
      )}
      <HorizontalBar></HorizontalBar>
    </>
  );
}

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  width: 100vw;
  min-height: 100vh;
  background-color: #ddd6ed;
  color: black;
`;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 58px 20px;
  background-color: #ddd6ed;
`;

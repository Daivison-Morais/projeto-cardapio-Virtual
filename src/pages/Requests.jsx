import { useEffect, useState } from "react";
import {
  deleteRequests,
  getRequests,
  putRequests,
} from "../services/requestsApi";
import styled from "styled-components";
import { Main } from "./Administrator";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [clickedBt1, setClickedBt1] = useState(false);
  const [clickedBt2, setClickedBt2] = useState(false);
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    getRequests()
      .then((response) => {
        setRequests(response);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }, [refresh]);

  console.log(requests);

  function updateRequest(idRequest) {
    putRequests(idRequest)
      .then((response) => {
        setClickedBt1(!clickedBt1);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }

  function deleteRequest(status, idRequest) {
    deleteRequests(status, idRequest)
      .then((response) => {
        setClickedBt2(clickedBt2);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }

  return (
    <>
      <Main>
        {requests.map((value) => (
          <>
            <CardRequests>
              <Title>Mesa {value.tableNumber}</Title>
              <ListRequests>
                {value.listRequests.split(", ").map((value) => (
                  <div>{value}</div>
                ))}
              </ListRequests>
              <ContainerBtn>
                <Button
                  onClick={() => {
                    updateRequest(value.id);
                  }}
                >
                  Preparando
                </Button>
                <Button
                  onClick={() => {
                    deleteRequest("finished");
                  }}
                >
                  Finalizado
                </Button>
              </ContainerBtn>
            </CardRequests>
          </>
        ))}
      </Main>
    </>
  );
}

const ListRequests = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  div {
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 10vw;
  margin: 10px 15px;
  border-radius: 8px;
  background-color: #161726;
  color: white;
  border: 1px white solid;
`;

const Title = styled.div``;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardRequests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 90vw;
  padding: 7px;
  border-radius: 8px;
  color: white;
  background-color: #474b6c;
`;

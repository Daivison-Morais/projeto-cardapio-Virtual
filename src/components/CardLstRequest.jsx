import { useState } from "react";
import styled from "styled-components";
import { deleteRequests, putRequests } from "../services/requestsApi";

export default function CardLstRequests({ value }) {
  const [clickedBt1, setClickedBt1] = useState(false);
  const [clickedBt2, setClickedBt2] = useState(false);

  function updateRequest(body) {
    if (body.status === "preparing") {
      setClickedBt1(true);
    }

    if (body.status === "finished") {
      setClickedBt2(true);
    }

    putRequests(body)
      .then((response) => {
        setClickedBt1(true);
        if (response.status === "finished") {
          /*  deleteRequests(body.idRequest)
          .then((response) => {
          })
          .catch((error) => {
            console.log(error);
            setClickedBt1(false)
            alert("Requisição mal formada");
          }); */
        }
      })
      .catch((error) => {
        console.log(error);
        setClickedBt1(false);
        alert("Requisição mal formada");
      });
  }

  return (
    <CardRequests clickedBt2={clickedBt2} clickedBt1={clickedBt1}>
      <Title>Mesa {value.tableNumber}</Title>
      <ListRequests>
        {value.listRequests.split(", ").map((value) => (
          <div>{value}</div>
        ))}
      </ListRequests>
      {value.description ? <div>Descrição: {value.description}</div> : ""}

      <ContainerBtn>
        <BtnPreparing
          clickedBt1={value.status === "preparing" ? true : clickedBt1}
          onClick={() => {
            updateRequest({ idRequest: value.id, status: "preparing" });
          }}
        >
          Preparando
        </BtnPreparing>
        <BtnFinished
          clickedBt1={clickedBt1}
          clickedBt2={clickedBt2}
          onClick={() => {
            updateRequest({ idRequest: value.id, status: "finished" });
          }}
        >
          Finalizado
        </BtnFinished>
      </ContainerBtn>
    </CardRequests>
  );
}

const ListRequests = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  div {
    margin: 3px 0;
  }
`;

const BtnPreparing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 10vw;
  min-width: 98px;
  margin: 10px 15px;
  border-radius: 8px;
  max-height: 50px;
  background-color: ${({ clickedBt1 }) => (clickedBt1 ? "#50a152" : "#161726")};
  color: white;
  border: 1px white solid;
  cursor: pointer;
`;

const BtnFinished = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  min-width: 98px;
  height: 10vw;
  max-height: 50px;
  margin: 10px 15px;
  border-radius: 8px;
  background-color: ${({ clickedBt2, clickedBt1 }) =>
    clickedBt2 === true && clickedBt1 === true ? "#50a152" : "#161726"};
  color: white;
  border: 1px white solid;
  cursor: pointer;
`;

const Title = styled.div``;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardRequests = styled.div`
  display: ${({ clickedBt1, clickedBt2 }) =>
    clickedBt1 === true && clickedBt2 === true ? "none" : "flex"};
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

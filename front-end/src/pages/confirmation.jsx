import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Products";
import HorizontalBar from "../components/HorizontalBar";
import { postRequest } from "../services/requestsApi";
import { useContext, useState } from "react";
import UserContext from "../components/UserContext";

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { restaurantId } = useContext(UserContext);

  const { productsSelects } = location.state;
  const [description, setDescription] = useState("");

  const tableNumber = localStorage.tableNumber || 2;
  let totalPrice = 0;
  let listRequests = "";

  productsSelects.forEach(({ price, name }) => {
    totalPrice += price;
    listRequests += name + ", ";
  });

  const body = {
    restaurantId: restaurantId,
    listRequests: listRequests,
    description: description,
    tableNumber: tableNumber,
    status: "waiting",
    totalPrice: totalPrice * 100,
  };

  console.log(body);

  function DoRequest() {
    console.log(body)

    postRequest(body)
      .then((response) => {
        navigate("/wainting", {
          state: {
            request: response,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }


  return (
    <>
      <Main>
        <Title>{`lista de pedidos - mesa ${tableNumber}`}</Title>
        {productsSelects.map((value) => (
          <EachProduct>{value.name}</EachProduct>
        ))}

        <Price>Preço Total: {totalPrice} R$</Price>
        <Form>
          <Input
          placeholder="Adicionar descrição"
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          >
          </Input>
        </Form>
      </Main>
      <HorizontalBar>
        <Button onClick={DoRequest}>Fazer Pedido </Button>
      </HorizontalBar>
    </>
  );
}
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  font-size: 20px;
  color: #262626;
  padding-left: 8px;
  border-radius: 5px;
`;

const Form = styled.form`
  font-size: 20px;
  margin-bottom: 25px;
  border-radius: 5px;
`;

const Price = styled.div`
  font-size: 23px;
  margin: 25px;
`;

const Title = styled.div`
  font-size: 23px;
  margin-bottom: 25px;
`;

const EachProduct = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 8px 5px;
`;

export const Main = styled.div`
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 20px;
  width: 100vw;
  min-height: 100vh;
  background-color: #ddd6ed;
`;

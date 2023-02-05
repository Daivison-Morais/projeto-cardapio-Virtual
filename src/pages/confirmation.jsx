import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Products";
import HorizontalBar from "../components/HorizontalBar";
import { postRequest } from "../services/confirmationApi";
import { useState } from "react";

export default function Confirmation() {

    const navigate = useNavigate();
  const location = useLocation();
  const productsSelects = location.state.productsSelects;
  const [description, setDescription] = useState('');
  const tableNumber = localStorage.tableNumber || 0;  
  let totalPrice = 0;
  let listRequests = "";

  productsSelects.forEach(({price, name})=>{
      totalPrice += price;
      listRequests += name + ", ";
  })
  console.log(totalPrice);
  console.log(listRequests);
  function DoRequest (){

    const body ={
        listRequests: listRequests,
        description: description,
        tableNumber: tableNumber,
        status: "waiting",
        totalPrice: totalPrice
      }

    postRequest(body)
    .then(()=>{
        navigate("/")
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <>
      <Main>
        <Title>{"lista de pedidos - mesa "}</Title>
        {productsSelects.map((value) => (
          <EachProduct>{value.name}</EachProduct>
        ))}

        <Price>Preço Total: {totalPrice} R$</Price>
      </Main>
      <HorizontalBar>
        <Button onClick={DoRequest}>Fazer Pedido </Button>
      </HorizontalBar>
    </>
  );
}

const Price = styled.div`
font-size: 20px;
margin:25px;
`;

const Title = styled.div`
font-size: 20px;
    margin-bottom: 25px;
`;

const EachProduct = styled.div`
font-size: 15px;
  text-align: center;
  margin: 8px 5px;
`;

export const Main = styled.div`
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #161726;
`;

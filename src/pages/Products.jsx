import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProducts } from "../services/menuApi";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardProduct from "../components/CardProduct";

export default function Products() {
  const location = useLocation();
  const categoryId = location.state.categoryId;
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }, [categoryId]);

  return (
    <>
      <NavBar />
      <Main>
        {products?.map(({ id, name, description, imageUrl, price }) => {
          return (
            <>
              <CardProduct
                name={name}
                description={description}
                imageUrl={imageUrl}
                price={price}
              />
            </>
          );
        })}
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  width: 100%;
  flex-wrap: wrap;
  word-wrap: break-word;
  background-color: white;
`;

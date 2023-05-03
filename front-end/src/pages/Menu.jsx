import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCategories } from "../services/menuApi";
import CardCategory from "../components/CardCategory";
import HorizontalBar from "../components/HorizontalBar";
import UserContext from "../components/UserContext";
import { useContext } from "react";

export default function Menu() {
  const [categories, setCategories] = useState([]);  
  const { setRestaurantId } = useContext(UserContext);

  useEffect(() => {
    getCategories() 
      .then((response) => {
        setCategories(response);
        setRestaurantId(response[0].restaurantId)        
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }, []);



  return (
    <>
      <Main>
        {categories.length === 0
          ? "Aguarde..."
          : categories.map(({ imageUrl, name, id, restaurantId }) => {
              return (
                <CardCategory
                  src={imageUrl}
                  name={name}
                  categoryId={id}
                  restaurantId={restaurantId}
                  key={id}
                />
              );
            })}
      </Main>
      <HorizontalBar>

    </HorizontalBar>
    </>
  );
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd6ed;
  width: 100%;
  min-height: 100vh;
  padding: 70px 10px;
`;

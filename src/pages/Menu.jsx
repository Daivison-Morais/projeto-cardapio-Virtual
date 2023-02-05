import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCategories } from "../services/menuApi";
import CardCategory from "../components/CardCategory";
import HorizontalBar from "../components/HorizontalBar";

export default function Menu() {
  const [categories, setCategories] = useState([]);  

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response);
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
          : categories.map(({ imageUrl, name, id }) => {
              return (
                <CardCategory
                  src={imageUrl}
                  name={name}
                  categoryId={id}
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
  justify-content: center;
  width: 100%;
  padding: 3px 10px;
`;

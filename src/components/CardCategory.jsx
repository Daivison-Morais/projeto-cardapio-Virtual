import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CardCategory({ src, name, categoryId, restaurantId }) {
  const navigate = useNavigate();

  return (
    <>
      <FoodTemplate
        onClick={() => {
          navigate("/products", {
            state: {
              categoryId: categoryId,
            },
          });
        }}
      >
        <ImgFood src={src} />
        <Text>{name}</Text>
      </FoodTemplate>
    </>
  );
}

const Text = styled.div`
  font-family: "Bad Script", cursive;
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  top: 41%;
  left: 8px;
  color: white;
`;

const ImgFood = styled.img`
  width: 90vw;
  height: 80px;
  border-radius: 25px;
  background-color: white;
  object-fit: cover;
  margin: 9px 0;
  cursor: pointer;
  box-shadow: 0px 0px 7px;
`;

const FoodTemplate = styled.div`
  position: relative;
`;

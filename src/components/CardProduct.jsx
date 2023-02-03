import { useState } from "react";
import styled from "styled-components";

export default function CardProduct({name, imageUrl, description, price}) {

    const [selected, setSelected] = useState(false);

    function Selection() {
        
    }

  return (
    <CardProduto onClick={Selection}>
      <ImgProduc src={imageUrl}></ImgProduc>
      <NameProduct>{name}</NameProduct>
      <Descripition>{description}</Descripition>
      <Price>{price / 100} R$</Price>
    </CardProduto>
  );
}

const Price = styled.div`
  font-weight: 700;
  margin-top: 2px;
`;
const Descripition = styled.div`
  display: flex;
  font-size: 9px;
  
  text-align: center;
  max-height: 50px;
`;

const NameProduct = styled.div`
  text-align: center;
  font-weight: 700;
`;
const ImgProduc = styled.img`
  width: 70%;
  max-height: 67%;
`;

const CardProduto = styled.div`
 font-family: 'Merriweather', serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40vw;
  height: 55vw;
  max-width: 152px;
  max-height: 209px;
  min-height: 164px;
  min-width: 120px;
  margin: 5px;
  padding: 4px;
  border: 0.5px #DADCE0 solid;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;
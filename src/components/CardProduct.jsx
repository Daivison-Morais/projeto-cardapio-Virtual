import styled from "styled-components";
import { BsCheck2Square } from "react-icons/bs";

export default function CardProduct({
  name,
  imageUrl,
  description,
  price,
  lstProducts,
  setLstProducts,
  categoryId,
  refresh,
  setRefresh,
}) {

  function Selection() {
    const product = {
      categoryId: categoryId,
      name: name,
      price: price / 100,
    };
    

    if (!lstProducts.find(value => (value.name.includes(name)))) {
      lstProducts.push(product);
      setLstProducts(lstProducts);
      setRefresh(!refresh);
      return;
    }


    for(let i =0; i < lstProducts.length; i++){
      if(lstProducts[i].name === name){
        lstProducts.splice(i, 1);
        setLstProducts(lstProducts);
        setRefresh(!refresh);
      }
    }
  }

  return (
    <CardProduto onClick={Selection}>
      <ImgProduc src={imageUrl}></ImgProduc>
      <NameProduct>{name}</NameProduct>
      <Descripition>{description}</Descripition>
      <Price>{price / 100} R$</Price>
      {lstProducts.map((value) => {
        return value.name === name ? (
          <SelectedSvg onList={true}>
            <BsCheck2Square />
          </SelectedSvg>
        ) : (
          <SelectedSvg onList={false}>
            <BsCheck2Square />
          </SelectedSvg>
        );
      })}
    </CardProduto>
  );
}

const SelectedSvg = styled.div`
  font-weight: 700;
  margin-top: 2px;
  opacity: ${({ onList }) => (onList ? "1" : "0")};
  > svg {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 15px;
  }
`;

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
  position: relative;
  font-family: "Merriweather", serif;
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
  border: 0.5px #dadce0 solid;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  background-color: white;
  cursor: pointer;
`;

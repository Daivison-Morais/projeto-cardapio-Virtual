import styled from "styled-components"
import topo from "../assets/topo.jpg";
export function Menu(){
    return (
      <>
        <Topo>
          <Img src={topo} alt="topo"></Img>
        </Topo>
        <Main>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1045156401351249980/1068620102955696209/IMG-20230127-WA0011.jpg" />
            <Text>Pizza</Text>
          </FoodTemplate>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1068625823613067355/1069053979243315242/princBurguer.jpg" />
            <Text>Lanches</Text>
          </FoodTemplate>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1068625823613067355/1069053979759226890/princBebidas.jpg" />
            <Text>Bebidas</Text>
          </FoodTemplate>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1068625823613067355/1069227305949462528/PrincDoces.jpg" />
            <Text>Doces</Text>
          </FoodTemplate>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1045156401351249980/1068620102955696209/IMG-20230127-WA0011.jpg" />
            <Text>Pizza</Text>
          </FoodTemplate>
          <FoodTemplate>
            <ImgFood src="https://media.discordapp.net/attachments/1068625823613067355/1069035112009826406/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast.jpg" />
            <Text>Lanches</Text>
          </FoodTemplate>
          </Main>
        <Footer>
          <Img src={topo} alt="topo"></Img>
        </Footer>
      </>
    );
}

const Text = styled.div`
  position: absolute;
  top: 41%;
  left: 8px;
  color: white;
`;

const ImgFood = styled.img`
    width: 90vw;
    height: 80px;
    border-radius: 25px;
    background-color: red;
    object-fit: cover;
    margin: 6px 0;
    box-shadow: 0px 0px 9px 2px black;
  
`;

const FoodTemplate = styled.div`
position: relative;
`;

const Footer = styled.div`
position: fixed;
bottom: 0;
left: 0;
    width: 100%;
    height: 50px;
`;

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    width: 100%;
    padding: 3px 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 50px;
`;

const Topo = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    top:0;
    left: 0;
    background-color: brown;
`;
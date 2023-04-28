import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"
import HorizontalBar from "../components/HorizontalBar";
import { getByIdRequests } from "../services/requestsApi";

export default function Waiting(){
const navigate = useNavigate()
const location = useLocation();
const request = location.state.request;

    const [info, setInfo]= useState([]);
    let teste;


    useEffect(() => {

        const timer = setInterval(()=>{
            getByIdRequests(request.id)
            .then((response) => {
              setInfo(response);
            })
            .catch((error) => {
              console.log(error);
              alert("malformed request");
            });    
            
            if(info.status === 'finished'){
                setTimeout(()=>{
                    navigate("/")
                }, 15*1000)
            }

        }, 5000);

       
        }, [])


    return (<>
    <Center>
        <Container>
{info?.status === "waiting" ? "Aguarde a preparação do seu pedido" 
: info?.status === "preparing" ? "Seu pedido ja está sendo preparado"
: info?.status === "finished" ? "Seu pedido já está pronto! :)" 
: "Aguarde a preparação do seu pedido" }
        </Container>
    </Center>
    <HorizontalBar>
    </HorizontalBar>
    </>)
}

const Container = styled.div`
text-align: center;
font-size: 24px;
  color: black;
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd6ed;
  width: 100vw;
  min-height: 100vh;
`;
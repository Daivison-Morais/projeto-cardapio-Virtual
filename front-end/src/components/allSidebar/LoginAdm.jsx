import { useState } from "react";
import styled from "styled-components";
import { postLoginAdmin } from "../../services/loginAdm";
import HorizontalBar from "../HorizontalBar";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function LoginAdm() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleForm(event) {
    event.preventDefault();

    const body = {
      name: name,
      password: password,
    };

    postLoginAdmin(body)
      .then((response) => {
        setToken(response.token);
        navigate("/administrator");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.error);
      });
  }

  return (
    <>
      <Form onSubmit={handleForm}>
        <Input
          placeholder="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        ></Input>

        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>

      <HorizontalBar></HorizontalBar>
    </>
  );
}

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: #1f1732;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  border-style: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 13px;
  font-size: 17px;
  color: #262626;
  padding-left: 8px;
  border-radius: 5px;
`;

const Form = styled.form`
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  line-height: 12px;
  color: white;
  font-size: 10px;
  border-radius: 8px;
  background-color: #575770;
  padding: 7px 7px;
`;

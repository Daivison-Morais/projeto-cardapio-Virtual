import styled from "styled-components";

export function SidebarItem({ Icon, Text, setState, state }) {
  return (
    <Container onClick={() => {setState(!state)
    }} >
      <Icon />
      {Text}
    </Container>
  );
}

export const Container = styled.div`
  font-family: "Merriweather", serif;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  background-color: #575770;
  padding: 7px;

  > svg {
    font-size: 3rem;
    margin: 7px;
  }

  &:hover {
    cursor: pointer;
    background-color: black;
  }

`;

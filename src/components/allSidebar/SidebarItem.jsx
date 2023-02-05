import styled from "styled-components";

export function SidebarItem({ Icon, Text }) {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
}

export const Container = styled.div`
font-family: 'Merriweather', serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  line-height: 12px;
  color: white;
  font-size: 10px;
  border-radius: 8px;
  background-color: #575770;
  padding: 7px;

  > svg {
    font-size: 25px;
    margin: 7px;
  }

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

import { styled } from "styled-components";

export default function TopBar() {
  return (
    <Container>
      <TopBarTitle>G & G</TopBarTitle>
      <MenuContainer>
        <h1>MENU</h1>
        <ion-icon name="menu-outline"></ion-icon>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  overflow: hidden;
  background-color: #FFCAD4;
  border-bottom: 1px solid #313131;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const TopBarTitle = styled.h1`
  font-size: 19px;
  color: #000;
  margin-left: 30px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  h1 {
    font-size: 17px;
    margin-top: 2px;
  }
  ion-icon {
    font-size: 30px;
    margin-left: 6px;
  }
`;

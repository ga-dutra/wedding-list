import React, { useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "styled-components";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const AnimatedIcon = animated("ion-icon");

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  const menuAnimation = useSpring({
    transform: `translateY(${isMenuOpen ? "50px" : "-100%"})`,
  });

  const iconRotation = useSpring({
    transform: `rotate(${isIconRotated ? 180 : 0}deg)`,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsIconRotated(!isIconRotated);
  };

  return (
    <Container>
      <TopBarTitle>G & G</TopBarTitle>
      <MenuContainer>
        <h1 onClick={toggleMenu}>MENU</h1>
        <AnimatedIcon
          onClick={toggleMenu}
          name={isIconRotated ? "close-outline" : "menu-outline"}
          style={iconRotation}
        />
        <AnimatedMenu style={menuAnimation}>
          <MenuContent>
            <MenuOption name={"Página Inicial"}></MenuOption>
            <MenuOption name={"Lista de presentes"}></MenuOption>
          </MenuContent>
        </AnimatedMenu>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
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

const MenuContent = styled.div`
  /* background-color: #ffffff;
  height: 200px;
  width: 180px; */
`;

const AnimatedMenu = styled(animated.div)`
  position: absolute;
  width: 260px;
  background-color: #D8E2DC;
  transition: transform 0.1s ease;
  z-index: 500;
  height: auto; /* Altere o height para auto */
  top: 0;
  opacity: 0.6;
`;

function MenuOption({ name }) {
  const navigate = useNavigate();
  const {setPageSelected} = useContext(UserContext);
  return (
    <OptionContainer onClick={() => {
      setPageSelected(name);
      if (name === "Página Inicial") navigate("/");
      else if (name === "Lista de presentes") navigate("/lista");
    }}>{name}</OptionContainer>
  );
};

const OptionContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #D8E2DC; /* Cor de fundo padrão */
  cursor: pointer;
  &:hover {
    background-color: #c0b8b8; /* Cor de fundo quando o cursor estiver sobre o componente */
    font-weight: 600;
  }
`;

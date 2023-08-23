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
      <MenuContainer onClick={toggleMenu}>
        <h1 >MENU</h1>
        <AnimatedIcon
          name={isIconRotated ? "close-outline" : "menu-outline"}
          style={iconRotation}
        />
        <AnimatedMenu style={menuAnimation}>
          <MenuContent>
            <MenuOption name={"Página Inicial"} iconName={"home-outline"}></MenuOption>
            <MenuOption name={"Lista de presentes"} iconName={"gift-outline"}></MenuOption>
            <MenuOption name={"Carrinho"} iconName={"cart-outline"}></MenuOption>
            <MenuOption name={"Confirmação de presença"} iconName={"checkmark-circle-outline"}></MenuOption>
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
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  cursor: pointer;
  h1 {
    font-size: 17px;
    margin-top: 2px;
  }
  ion-icon {
    font-size: 30px;
    margin-left: 4px;
  }
`;

const MenuContent = styled.div`
  /* background-color: #ffffff;
  height: 200px;
  width: 180px; */
`;

const AnimatedMenu = styled(animated.div)`
  position: absolute;
  width: 440px;
  background-color: #D8E2DC;
  transition: transform 0.1s ease;
  z-index: 500;
  height: auto; /* Altere o height para auto */
  top: 0;
  opacity: 0.85;
`;

function MenuOption({ name, iconName }) {
  const navigate = useNavigate();
  const {pageSelected, setPageSelected} = useContext(UserContext);
  return (
    <OptionContainer pageSelected={pageSelected} name={name} onClick={() => {
      setPageSelected(name);
      if (name === "Página Inicial") navigate("/");
      else if (name === "Lista de presentes") navigate("/lista");
      else if (name === "Carrinho") navigate("/carrinho");
      else if (name === "Confirmação de presença") navigate("/presenca");
    }}>
      <ion-icon name={iconName}></ion-icon>
      <h3>{name}</h3>
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-family: 'Comfortaa', cursive;

  background-color: #D8E2DC; /* Cor de fundo padrão */
  cursor: pointer;
  &:hover {
    background-color: #c0b8b8; /* Cor de fundo quando o cursor estiver sobre o componente */
    font-weight: 700;
  }

  h3 {
    font-size: ${(props) => (props.pageSelected === props.name ? "17px" : "16px")};
    font-weight: ${(props) => (props.pageSelected === props.name ? "700" : "400")};
  }

  ion-icon {
    font-size: ${(props) => (props.pageSelected === props.name ? "20px" : "19px")};
    padding: 0 8px 2px 0;
  }
`;

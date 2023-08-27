import { styled } from "styled-components";
import foto_perfil from "../assets/img/foto_perfil_monte_verde.jpg";
import foto_retrato from "../assets/img/foto_retrato_monte_verde.jpg";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MainPage() {
  const { setPageSelected } = useContext(UserContext);
  const navigate = useNavigate();
    return (
      <Container>
        <TopBar />
        <CouplePictureContainer>
          <CouplePicture src={foto_retrato}></CouplePicture>
        </CouplePictureContainer>
        <KitchenListContainer>
          <h1>Chá da Gi</h1>
          <div>
            <h2>Gostaríamos de convidar você a participar do nosso chá de cozinha!</h2>
            <h3>Data: 23/09/2023</h3>
            <h3>Horário: 15h</h3>
            <h3>Endereço: Avenida de Cillos, 1722. Jardim São Francisco, Santa Bárbara do Oeste - SP.</h3>
            <h4>Venha fazer parte desse momento especial. Esperamos você!</h4>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="79">
            <path d="M134.593 38.513l-5.204 1.301-5.201-1.301-5.203 1.301-5.2-1.301-5.199 1.301-5.199-1.301-5.202 1.301-5.199-1.301-5.201 1.301-5.2-1.301-5.2 1.301-5.2-1.301-5.199 1.301-5.2-1.301-5.198 1.301-5.199-1.301-5.198 1.301-5.197-1.301-5.197 1.301-5.199-1.301-5.197 1.301-4.996-1.251-.405 1.56 5.401 1.352 5.197-1.301 5.199 1.301 5.196-1.301 5.198 1.301 5.198-1.301 5.199 1.301 5.198-1.301 5.2 1.301 5.199-1.301 5.2 1.301 5.2-1.301 5.2 1.301 5.201-1.301 5.199 1.301 5.202-1.301 5.199 1.301 5.199-1.301 5.2 1.301 5.203-1.301 5.201 1.301 5.204-1.301 5.002 1.25.405-1.558v-.002z" fill="#38485D" fillRule="evenodd"></path>
          </svg>
        </KitchenListContainer>
        <NextStepButton onClick={() => {
          navigate("/lista");
          setPageSelected("Lista de presentes");
        }}>Ver presentes</NextStepButton>
      </Container>
    );
  }

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #FFCAD4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const KitchenListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 410px;
  line-height: 20px;

  h1 {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  div {
    text-align: center;
    margin: 0 12px;
  }

  h2 {
    margin-top: 6px;
    line-height: 20px;
    margin-bottom: 26px;
  }

  h3 {
    margin-top: 6px;
  }

  h4 {
    margin-top: 20px;
  }
`;

const CouplePicture = styled.img `
  width: 100%;
  object-fit: contain;
`;

const CouplePictureContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const NextStepButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 88%;
  height: 60px;
  background-color: #383333;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;  
  margin-bottom: 50px;
`;
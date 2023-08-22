import { styled } from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./TopBar";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function AttendancePage() {
  const [isGoing, setIsGoing] = useState(true);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#383333");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    isGoing: true,
  });
  async function sendAttendance() {
    if (!form.name || !form.phone) {
      return toast.error("Por favor preencha os dados corretamente antes de enviar!");
    }
    try {
      
    } catch (error) {
      console.log(error);
      return error;  
    }
  }
  return (
    <Container>
      <TopBar />
      <MessageContainer>
        <h1>Confirmação de Presença</h1>
        <div>
          <h2>Venha aproveitar esse dia com a gente e confirme sua presença.</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="79">
          <path d="M134.593 38.513l-5.204 1.301-5.201-1.301-5.203 1.301-5.2-1.301-5.199 1.301-5.199-1.301-5.202 1.301-5.199-1.301-5.201 1.301-5.2-1.301-5.2 1.301-5.2-1.301-5.199 1.301-5.2-1.301-5.198 1.301-5.199-1.301-5.198 1.301-5.197-1.301-5.197 1.301-5.199-1.301-5.197 1.301-4.996-1.251-.405 1.56 5.401 1.352 5.197-1.301 5.199 1.301 5.196-1.301 5.198 1.301 5.198-1.301 5.199 1.301 5.198-1.301 5.2 1.301 5.199-1.301 5.2 1.301 5.2-1.301 5.2 1.301 5.201-1.301 5.199 1.301 5.202-1.301 5.199 1.301 5.199-1.301 5.2 1.301 5.203-1.301 5.201 1.301 5.204-1.301 5.002 1.25.405-1.558v-.002z" fill="#38485D" fillRule="evenodd"></path>
        </svg>
      </MessageContainer>
      <FormContainer>
        <input placeholder="Insira seu nome" onChange={(e) => setForm({ ...form, name: e.target.value })}></input>
        <AttendenceConfirmationContainer>
          <h5>Você irá ao evento ?</h5>
          <div>
            <OptionContainer isGoing={isGoing} onClick={() => setIsGoing(!isGoing)}>
              Sim
              <div>
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
            </OptionContainer>
            <OptionContainer isGoing={!isGoing} onClick={() => setIsGoing(!isGoing)}>
              Não
              <div>
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </OptionContainer>
          </div>
        </AttendenceConfirmationContainer>
        <input placeholder="Celular" type="tel" onChange={(e) => setForm({ ...form, phone: e.target.value })}></input>
        <ConfirmAttendance onMouseEnter={() => setButtonBackgroundColor("#272424")} onMouseLeave={() => setButtonBackgroundColor("#383333")} backgroundColor={buttonBackgroundColor} onClick={sendAttendance}>
          Responder
        </ConfirmAttendance>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #FFCAD4;
  box-sizing: border-box;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 340px;

  h1 {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 20px;
    margin-top: 50px;
  }

  div {
    text-align: center;
    margin: 0 8px;
  }

  h2 {
    margin-top: 6px;
    line-height: 20px;
  }
`;

const FormContainer = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    width: 80%;
    height: 5vh;
    border: 1px solid #b1b0b0;
    padding: 8px;
  }

  input:nth-child(1) {
    margin-top: 30px;
  }

  input, input::placeholder {
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
  }
`;

const AttendenceConfirmationContainer = styled.div`
  display: flex;
  width: 80%;
  height: 5vh;
  align-items: center;
  justify-content: space-between;

  h5 {

  }
  div {
    display: flex;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  div {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    margin-left: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-icon {
    display: ${(props) => (props.isGoing ? "inherit" : "none")};
  }
`;

const ConfirmAttendance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
  height: 5vh;
  background-color: ${(props) => props.backgroundColor};  
  color: ${(props) => props.color};
  border: 1px solid #383333;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
`;
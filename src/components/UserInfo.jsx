import { useState, useContext, useEffect } from "react";
import { styled } from "styled-components";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnimation from "./LoadingAnimation";

export function UserInformation() {
  const {cart, setCart} = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [firstButtonBackgroundColor, setFirstButtonBackgroundColor] = useState("#383333");
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    cartSelected: JSON.stringify(cart)
  });
  useEffect(() => {
    let newPrice = 0;
    for (const product of cart) {
      newPrice += product.price * product.qtd;
    };
    setTotalPrice(newPrice);
  }, []);

  async function sendForm() {
    const baseURL = "https://wedding-list-backend.vercel.app"
    // const userInfo = await axios.post(`${baseURL}/users/userInfo`, form);
  }

  return (
    <>
      <StageContainer>2. Informações</StageContainer>
      <SubInformation>Preencha seus dados e deixe uma mensagem se desejar!</SubInformation>
      <FormContainer>
        <input required placeholder="Insira seu nome" onChange={(e) => setForm({ ...form, name: e.target.value })}></input>
        <input required placeholder="Celular" type="tel" onChange={(e) => setForm({ ...form, phone: e.target.value })}></input>
        <textarea required placeholder="Mensagem" onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
      </FormContainer>
      <SubInformation>Resumo</SubInformation>
      <SummaryContainer>
        <YourRequest>
          <h3>Seu Pedido</h3>
          <h3>Valor</h3>
        </YourRequest>
        <Gifts>
          <h3>Presente(s)</h3>
          <h3>R$ {totalPrice},00</h3>
        </Gifts>
        <Total>
          <h3>Total</h3>
          <h3>R$ {totalPrice},00</h3>
        </Total>
      </SummaryContainer>
      <NextStepButton loading={loading} backgroundColor={firstButtonBackgroundColor} onMouseEnter={() => setFirstButtonBackgroundColor("#272424")} onMouseLeave={() => setFirstButtonBackgroundColor("#383333")} onClick={() => {
          if (!form.name || !form.phone || !form.message) return toast.error("Por favor preencha os dados corretamente antes de prosseguir!");
          setLoading(true);
          sendForm();
        }}>{!loading ? "Próximo passo" : <LoadingAnimation />}</NextStepButton>
    </>
  )
}

const StageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  background-color: #383333;
  border-radius: 4px;
  margin-top: 80px;
  color: #fff;
`;

const SubInformation = styled.h1`
  margin-top: 50px;
`;

const FormContainer = styled.div`
  width: 100vw;
  height: 360px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  input, textarea {
    width: 80%;
    height: 5vh;
    border: 1px solid #b1b0b0;
    padding: 8px;
    margin: 14px 0;
  }

  input, input::placeholder, textarea, textarea::placeholder {
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
  }

  textarea {
  resize: none;
  height: 10vh;
  }
`;

const SummaryContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  margin-top: 50px;
`;

const YourRequest = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  border-bottom: 1px solid #e0d7d7;
  padding-bottom: 22px;
`;

const Gifts = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0d7d7;
  padding-bottom: 22px;
`;

const Total = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const NextStepButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 90%;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  color: #fff;
  cursor: ${(props) => props.loading ? "wait" : "pointer"};  
  pointer-events: ${(props) => props.loading ? "none" : "inherit"};  
`;

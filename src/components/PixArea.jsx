import { styled } from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import retrato from "../assets/img/foto_perfil_monte_verde.jpg";
import QRCode from 'qrcode.react';
import { UserContext } from "../context/UserContext";

export default function PixArea({ totalPrice, priceString }) {
  const { cart } = useContext(UserContext);
  const [chave, setChave] = useState('00020126580014BR.GOV.BCB.PIX013604bb63f8-f25b-46ae-ba48-8be4550cea175204000053039865802BR5915Giovana La Luna6009SAO PAULO61080540900062250521Lav8fljbLA6eBma1h4ysg63042EC7');

  const cartLenght = cart?.length || 1;
  const extraString = cartLenght > 1 ? "s" : "";
  const handleCopyClick = () => {

    const tempInput = document.createElement('input');
    tempInput.value = chave;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    toast.success("Chave copiada para a área de transferência!");
  };
  const textoQRCode = `chave=${chave}`;
  return (
    <>
      <StageContainer>3. Pagamento</StageContainer>
      <PixAreaContainer>
        <PixTextContainer>
          <h1>Área Pix</h1>
          <h1>Valor: <span>R$ {priceString} </span></h1>
          <QRCode value={chave} size={140} />
          <KeyContainer>
            <h1>Chave: {chave}</h1>
            <ion-icon onClick={handleCopyClick} name="copy-outline"></ion-icon>
          </KeyContainer>
          <h2><span>Atenção!</span></h2>
          <h3>O código pix virá com valor zerado. Pedimos que você insira o valor correspondente ao{extraString} seu{extraString} presente{extraString} antes de realizar a transferência.</h3>
          <h2>Obrigado e esperamos por você!</h2>
        </PixTextContainer>
        {/* <RetratoContainer>
          <img src={retrato} alt="Foto Retrato" />
        </RetratoContainer> */}
    </PixAreaContainer>
    </>
  );
};

const KeyContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;

  h1 {
    width: 90%;
    word-wrap: break-word;
  }

  ion-icon {
    cursor: pointer;
    margin-top: 8px;
    font-size: 26px;

  }
`

const StageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  background-color: #383333;
  border-radius: 4px;
  margin-top: 60px;
  color: #fff;
`;

const PixAreaContainer = styled.div`
  width: 100vw;
  height: 580px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  h1 {
    font-size: 17.25px;
  }
  h1:nth-child(2n) {
    font-size: 18px;
    font-weight: 500;
  }

  h3 {
    padding: 0 4px;
  }
  span {
    color: #cf1717;
  }
`;

const RetratoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  img {
    width: 43vw;
    object-fit: contain;
  }
`;

const PixTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  font-family: 'Didact Gothic', sans-serif;
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  span {
    font-weight: 600;
  }
`
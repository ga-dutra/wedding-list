import { styled } from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import retrato from "../assets/img/foto_perfil_monte_verde.jpg";
import QRCode from 'qrcode.react';

export default function PixArea({ totalPrice }) {
  const [chave, setChave] = useState('00020126580014BR.GOV.BCB.PIX013601e374f7-4484-4382-8182-687a138a783d5204000053039865802BR5925Gabriel Augusto Correa Du6009SAO PAULO61080540900062240520b7AC2Tj136vN0wko8tet63049420');
  
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
          <h1>Valor: R$ {totalPrice}{totalPrice % 1 === 0 ? ",00" : ""}</h1>
          <QRCode value={chave} size={140} />
          <KeyContainer>
            <h1>Chave: {chave}</h1>
            <ion-icon onClick={handleCopyClick} name="copy-outline"></ion-icon>
          </KeyContainer>
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
  margin-top: 80px;
  color: #fff;
`;

const PixAreaContainer = styled.div`
  width: 100vw;
  height: 500px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  h1:nth-child(2n) {
    font-size: 18px;
    font-weight: 500;
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
`
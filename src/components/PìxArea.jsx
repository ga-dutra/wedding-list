import { styled } from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function PixArea({ totalPrice }) {
  const [chave, setChave] = useState('01e374f7-4484-4382-8182-687a138a783d');
  
  const handleCopyClick = () => {

    const tempInput = document.createElement('input');
    tempInput.value = chave;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    toast.success("Chave copiada para a área de transferência!");
  };
  return (
    <>
      <StageContainer>3. Pagamento</StageContainer>
      <PixAreaContainer>
      <h1>Área Pix</h1>
      <h1>Valor: R$ {totalPrice},00</h1>
      <h1>Chave: 01e374f7-4484-4382-8182-687a138a783d <span> <ion-icon onClick={handleCopyClick} name="copy-outline"></ion-icon> </span></h1>
      <h1>Obrigado e esperamos por você!</h1>
    </PixAreaContainer>
    </>
  );
};

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
  height: 360px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  h1{
    padding: 18px 0;
    position: relative;
    display: flex;
    align-items: center;
  }
  ion-icon {
    cursor: pointer;
    font-size: 20px;
    padding-left: 6px;
  }

`;
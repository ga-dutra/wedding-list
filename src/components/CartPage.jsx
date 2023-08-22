import { styled } from "styled-components";
import TopBar from "./TopBar";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const {cart, setCart} = useContext(UserContext);
  const navigate = useNavigate();
  const [firstButtonBackgroundColor, setFirstButtonBackgroundColor] = useState("#383333");
  const [secondButtonBackgroundColor, setSecondButtonBackgroundColor] = useState("#FFCAD4");
  const [secondButtonColor, setSecondButtonColor] = useState("#fff")
  return(
    <Container>
      <TopBar />
      <StageContainer>1. Carrinho</StageContainer>
      <CartContainer>
        <DescriptionAndQuantity>
          <h1>Descrição</h1>
          <h1>Quantidade</h1>
        </DescriptionAndQuantity>
        {cart.map((product) => <CartItem product={product}/>)}
        <TotalPrice>
          <h1>Total</h1>
          <h1>R$ 10,00</h1>
        </TotalPrice>
      </CartContainer>
      <NextStepButton backgroundColor={firstButtonBackgroundColor} onMouseEnter={() => setFirstButtonBackgroundColor("#272424")} onMouseLeave={() => setFirstButtonBackgroundColor("#383333")}>Próximo passo</NextStepButton>
      <AddMoreItemsButton color={secondButtonColor} backgroundColor={secondButtonBackgroundColor} onMouseEnter={() => {
        setSecondButtonBackgroundColor("#383333");
        setSecondButtonColor("#fff")
      }} onMouseLeave={() => {
        setSecondButtonBackgroundColor("#FFCAD4");
        setSecondButtonColor("#000");
      }}
      onClick={() => navigate("/lista")}
      >Adicionar presentes</AddMoreItemsButton>
    </Container>
);
}

function CartItem({ product }) {
  console.log(product);
  return (
    <CartItemContainer>
      <div>
        <div>
          <img src={product.img}></img>
          <h1>{product.productName}</h1>
        </div>
        <div>
          <div>
            <div>+</div>
            <div>{product.qtd}</div>
            <div>-</div>
          </div>
          <p>Remover</p>
        </div>
      </div>
      <ItemPrice>
        <h1>Valor</h1>
        <h1>R$ {product.price * product.qtd},00</h1>
      </ItemPrice>
    </CartItemContainer>
  );
}

const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  >div:nth-child(1) {
    display: flex;
    width: 90%;
    justify-content: space-between;
    border-top: 1px solid #f5dada;
    padding-top: 20px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      h1 {
        font-size: 14px;
      }
      div {
        display: flex;
        flex-direction: row;
        width: auto;
      }
      div div:nth-child(2) {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.5px solid #aaa3a3;
        margin-left: 4px;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
  }

  img {
    width: 100px;
  }
`;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #FFCAD4;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

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

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  height: auto;
  margin-top: 60px;
  padding: 20px 0;
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
  cursor: pointer;
`;

const AddMoreItemsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 90%;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};  
  color: ${(props) => props.color};
  border: 1px solid #383333;
  border-radius: 4px;
  cursor: pointer;

`;

const DescriptionAndQuantity = styled.div`
  display: flex;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 24px;
  padding-bottom: 20px;
  font-size: 16px;
  width: 70%;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  display: flex;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 24px;
  font-size: 16px;
  width: 90%;
  justify-content: space-between;
  border-bottom: 1px solid #f5dada;
  padding-bottom: 20px;
`;

const ItemPrice = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 24px;
  font-size: 16px;
  width: 94%;
  opacity: 0.8;
  justify-content: space-between;
`;
import { styled } from "styled-components";
import TopBar from "../components/TopBar";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserInformation } from "../components/UserInfo";

export default function CartPage() {
  const {cart, setCart} = useContext(UserContext);
  const navigate = useNavigate();
  const [firstButtonBackgroundColor, setFirstButtonBackgroundColor] = useState("#383333");
  const [secondButtonBackgroundColor, setSecondButtonBackgroundColor] = useState("#FFCAD4");
  const [secondButtonColor, setSecondButtonColor] = useState("#fff")
  const [step, setStep] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newPrice = 0;
    for (const product of cart) {
      newPrice += product.price * product.qtd;
    };
    setTotalPrice(newPrice);
  }, [cart]);

  if (step === 1) {
    return (
      <Container>
        <TopBar />
        <StageContainer>1. Carrinho</StageContainer>
        <CartContainer>
          <DescriptionAndQuantity>
            <h1>Descrição</h1>
            <h1>Quantidade</h1>
          </DescriptionAndQuantity>
          {cart.map((product) => <CartItem product={product}/>)}
          {cart.length === 0 && 
            <>
              <EmptyCart>O carrinho está vazio!</EmptyCart>
            </>
          }
          <TotalPrice>
            <h1>Total</h1>
            <h1>R$ {totalPrice},00</h1>
          </TotalPrice>
        </CartContainer>
        <NextStepButton backgroundColor={firstButtonBackgroundColor} onMouseEnter={() => setFirstButtonBackgroundColor("#272424")} onMouseLeave={() => setFirstButtonBackgroundColor("#383333")} onClick={() => {
          if (cart.length !== 0) setStep(2);
          else return toast.error("Seu carrinho está vazio!");
        }}>Próximo passo</NextStepButton>
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

  else if (step === 2) {
    return (
      <Container>
        <TopBar />
        <UserInformation />
        <AddMoreItemsButton color={secondButtonColor} backgroundColor={secondButtonBackgroundColor} onMouseEnter={() => {
          setSecondButtonBackgroundColor("#383333");
          setSecondButtonColor("#fff")
        }} onMouseLeave={() => {
          setSecondButtonBackgroundColor("#FFCAD4");
          setSecondButtonColor("#000");
        }}
        onClick={() => navigate("/lista")}
        >Adicionar presentes</AddMoreItemsButton>
        <Spacing />
      </Container>
    );
  }
 
}

function CartItem({ product }) {
  const {cart, setCart} = useContext(UserContext);
  function addItem() {
    const products = [...cart];
    const existingProduct = products.find(p => p.productName === product.productName);
    if (existingProduct) {
      existingProduct.qtd++;
    } else {
      products.push({ ...product, qtd: 1 });
    }
    setCart(products);
  }
  
  function removeItem() {
    const products = [...cart];
    const index = products.findIndex(p => p.productName === product.productName);
    if (index !== -1) {
      if (products[index].qtd > 1) {
        products[index].qtd--;
      } else {
        products.splice(index, 1);
      }
    }
    setCart(products);
  }

  function removeItemCompletely() {
    const products = [...cart];
    const index = products.findIndex(p => p.productName === product.productName);
    if (index !== -1) {
      products.splice(index, 1);
    }
    setCart(products);
  }
  return (
    <CartItemContainer>
      <ItemFirstRow>
        <ItemImgAndTitle>
          <img src={product.img}></img>
          <h1>{product.productName}</h1>
        </ItemImgAndTitle>
        <ProductQtdContainer>
          <div>
            <AddingCircularContainer onClick={removeItem}>-</AddingCircularContainer>
            <ProductsQtd>{product.qtd}</ProductsQtd>
            <AddingCircularContainer onClick={addItem}>+</AddingCircularContainer>
          </div>
          <p onClick={removeItemCompletely}>Remover</p>
        </ProductQtdContainer>
      </ItemFirstRow>
      <ItemPrice>
        <h1>Valor</h1>
        <h1>R$ {product.price * product.qtd},00</h1>
      </ItemPrice>
    </CartItemContainer>
  );
}

const ItemFirstRow = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    border-top: 1px solid #f5dada;
    padding-top: 20px;
    align-items: center;
`;

const ItemImgAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
  img {
    width: 100px;
  }
`;

const ProductQtdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-top: 6px;
    cursor: pointer;
  }
`;

const AddingCircularContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
`;

const ProductsQtd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #000;
  margin: 0 10px;
`;

const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  align-items: center;
  justify-content: center;
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
  margin-top: 24px;
  padding-bottom: 20px;
  font-size: 16px;
  width: 90%;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  display: flex;
  font-weight: 700;
  margin-top: 24px;
  font-size: 16px;
  width: 90%;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const ItemPrice = styled.div`
  display: flex;
  margin-top: 24px;
  font-size: 16px;
  width: 90%;
  opacity: 0.8;
  justify-content: space-between;
  border-bottom: 1px solid #f5dada;
  padding-bottom: 20px;
`;

const Spacing = styled.div`
margin-top: 80px;
`;

const EmptyCart = styled.h4 `
  width: 100%;
  text-align: center;
  margin: 14px 0;
`;
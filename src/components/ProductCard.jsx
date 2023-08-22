import { useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({productName, price, img}) {
  const {cart, setCart} = useContext(UserContext);
  const navigate = useNavigate();
  function addToCart() {
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].qtd += 1;
      setCart(updatedCart);
    } else {
      const newCartItem = {
        productName,
        price,
        img,
        qtd: 1
      };
      setCart(prevCart => [...prevCart, newCartItem]);
    }
    navigate("/carrinho");
  }

  return (
    <ProductContainer>
      <img src={img} alt={`Imagem do produto: ${productName}`} />
      <h1>{productName}</h1>
      <h2>R$ {price},00</h2>
      <BuyingButton onClick={addToCart}>Comprar</BuyingButton>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  width: 280px;
  height: 460px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  img {
    width: 180px;
    object-fit: contain;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;

  }
  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  h1, h2 {
    color: #000000;
  }
`;

const BuyingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 140px;
  height: 40px;
  background-color: #2C2C2C;
  color: #ffffffc8;
  font-size: 18px;
  cursor: pointer;
`;

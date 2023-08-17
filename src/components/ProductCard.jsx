import { styled } from "styled-components";

export default function ProductCard({productName, price, img}) {
  return (
    <ProductContainer>
      <img src={img} alt={`Imagem do produto: ${productName}`} />
      <h1>{productName}</h1>
      <h2>R$ {price},00</h2>
      <BuyingButton>Comprar</BuyingButton>
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
    font-weight: 500;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
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

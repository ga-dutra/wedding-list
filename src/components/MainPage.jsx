import { styled } from "styled-components";
import products from "../assets/products/products";
import ProductCard from "./ProductCard";

export default function MainPage() {
  console.log(products);
  return (
    <Container>
      <ProductsContainer>
        {['','','','','','','','','', '', '', ''].map((i, index) => (
          (<ProductCard key={index} img={products[0].img} productName={products[0].name} price={products[0].price} />)
        ))}
      </ProductsContainer>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #FFCAD4;
  box-sizing: border-box;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  >div {
    margin: 20px;
  }
`;

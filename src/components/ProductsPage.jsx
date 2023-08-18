import { styled } from "styled-components";
import products from "../assets/products/products";
import ProductCard from "./ProductCard";
import TopBar from "./TopBar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ProductsPage() {

  return (
    <Container>
      <TopBar />
      <KitchenListContainer>
        <h1>Lista de presentes</h1>
        <div>
          <h2>Aqui vocês poderão encontrar nossa lista de chá de cozinha.</h2>
          <h2>Obrigado pelos mimos!</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="79">
          <path d="M134.593 38.513l-5.204 1.301-5.201-1.301-5.203 1.301-5.2-1.301-5.199 1.301-5.199-1.301-5.202 1.301-5.199-1.301-5.201 1.301-5.2-1.301-5.2 1.301-5.2-1.301-5.199 1.301-5.2-1.301-5.198 1.301-5.199-1.301-5.198 1.301-5.197-1.301-5.197 1.301-5.199-1.301-5.197 1.301-4.996-1.251-.405 1.56 5.401 1.352 5.197-1.301 5.199 1.301 5.196-1.301 5.198 1.301 5.198-1.301 5.199 1.301 5.198-1.301 5.2 1.301 5.199-1.301 5.2 1.301 5.2-1.301 5.2 1.301 5.201-1.301 5.199 1.301 5.202-1.301 5.199 1.301 5.199-1.301 5.2 1.301 5.203-1.301 5.201 1.301 5.204-1.301 5.002 1.25.405-1.558v-.002z" fill="#38485D" fillRule="evenodd"></path>
        </svg>
        </KitchenListContainer>
        <ProductsContainer>
        {['','','','','','','','','', '', '', ''].map((i, index) => (
          (<ProductCard key={index} img={products[0].img} productName={products[0].name} price={products[0].price} />)
        ))}
      </ProductsContainer>
    </Container>
  );
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
    margin: 40px 20px;
    color: #d0ceceae;
  }
`;

const KitchenListContainer = styled.div`
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
    margin: 0 12px;
  }

  h2 {
    margin-top: 6px;
    line-height: 20px;
  }
`;

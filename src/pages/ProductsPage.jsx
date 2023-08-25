import { styled } from "styled-components";
import products from "../assets/products/products";
import ProductCard from "../components/ProductCard";
import TopBar from "../components/TopBar";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function ProductsPage() {
  const [priceOrder, setPriceOrder] = useState("");
  const [productsOrdered, setProductsOrdered] = useState(products);
  const productsBeforeOrdering = products;

  function orderProducts (order) {
    if (order === "inicial") return setProductsOrdered(productsBeforeOrdering);
    else if (order === "maior") {
      setProductsOrdered([...products].sort((a, b) => b.price - a.price));
    }
    else if (order === "menor") {
      setProductsOrdered([...products].sort((a, b) => a.price - b.price));
    }
  };

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
        <PriceOrdenationContainer>
          Ordenar por: 
          <PriceOrdenationType isClicked={priceOrder === "maior"} onClick={() => {
            if (priceOrder !== "maior") {
              setPriceOrder("maior");
              orderProducts("maior");
            } 
            else {
              setPriceOrder("");
              orderProducts("inicial");
            } 
          }}>Maior Preço</PriceOrdenationType>
          <PriceOrdenationType isClicked={priceOrder === "menor"} onClick={() => {
            if (priceOrder !== "menor") {
              setPriceOrder("menor");
              orderProducts("menor");
            } 
            else {
              setPriceOrder("");
              orderProducts("inicial");
            } 
          }}>Menor Preço</PriceOrdenationType>
        </PriceOrdenationContainer>
        <ProductsContainer>
        {productsOrdered.map((product) => (
          (<ProductCard key={product.name} img={product.img} productName={product.name} price={product.price} />)
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PriceOrdenationContainer = styled.div`
  width: 88%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 26px;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 15px;
`;

const PriceOrdenationType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 48%;
  border: 1px solid #000;
  transition: background-color 0.3s, box-shadow 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  font-weight: ${(props) => (!props.isClicked ? "400" : "700")};
  background-color: ${(props) => (!props.isClicked ? "#fff" : "#d8d8d8")};
  box-shadow: ${(props) => (!props.isClicked ? "0px 3px 5px rgba(0, 0, 0, 0.4);" : "none")};
  border-color: ${(props) => (!props.isClicked ? "#555555" : "#000000")};
  color: ${(props) => (!props.isClicked ? "#333333" : "#000000")}
`;

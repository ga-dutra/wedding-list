import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import GlobalStyle from "./styles/globalStyles";
import { UserStorage } from "./context/UserContext";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <UserStorage>
      <GlobalStyle />
      <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lista" element={<ProductsPage />} />
        </Routes>
      </Router>
    </UserStorage>
  );
}

export default App;

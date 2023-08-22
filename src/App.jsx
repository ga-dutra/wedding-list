import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { UserStorage } from "./context/UserContext";
import MainPage from "./components/MainPage";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import AttendancePage from "./components/AttendanceListPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserStorage>
      <ToastContainer />
      <GlobalStyle />
      <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lista" element={<ProductsPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/presenca" element={<AttendancePage />} />
        </Routes>
      </Router>
    </UserStorage>
  );
}

export default App;

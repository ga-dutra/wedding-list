import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { UserStorage } from "./context/UserContext";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import AttendancePage from "./pages/AttendanceListPage";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";

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
        <Route component={NotFound} />
        </Routes>
      </Router>
    </UserStorage>
  );
}

export default App;

import { Navigate, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lista" element={<ProductsPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/presenca" element={<AttendancePage />} />
        <Route element={<ReloadRedirect />} />
        <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </UserStorage>
  );
}

function ReloadRedirect() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      history.replace('/');
    }
  }, [location, history]);

  return null;
}

export default App;
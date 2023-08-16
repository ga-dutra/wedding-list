import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

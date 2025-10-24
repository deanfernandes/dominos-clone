import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route, Navigate } from "react-router";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/menu" />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

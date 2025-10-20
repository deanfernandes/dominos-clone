import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

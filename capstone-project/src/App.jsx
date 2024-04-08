import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PortfolioPage from "./components/PortfolioPage";
import ChatBot from "./components/Chatbot";
import ScrollRevealConfig from "./js/scroll-animation";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
        <ChatBot />
        <ScrollRevealConfig />
      </div>
    </>
  );
}

export default App;

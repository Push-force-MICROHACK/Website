import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import AIChat from "./Pages/AIChat/AIChat";

function App() {
  return (
    <div>
      {location.pathname !== "/plugin" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plugin" element={<AIChat />} />
      </Routes>
      {location.pathname !== "/plugin" && <Footer />}
    </div>
  );
}

export default App;

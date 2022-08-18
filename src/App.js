import "./App.css";
import Home from "./pages/Home";
import Artistas from "./pages/Artistas";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistas" element={<Artistas />} />
      </Routes>
    </Router>
  );
}

export default App;

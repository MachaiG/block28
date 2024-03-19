import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Yellow from "./components/Yellow";
import Brown from "./components/Brown";

function App() {
  return (
    <>
      <div id="container">
        <Nav />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/brown" element={<Brown />} />
            <Route path="/yellow" element={<Yellow />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

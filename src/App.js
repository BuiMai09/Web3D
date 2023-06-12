
import Home from "./components/View/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Porche from "./components/View/ProductDetail/Porche";
import Nav from "./components/View/Nav";
import Contact from "./components/View/Contact";
import FordGT from "./components/View/ProductDetail/FordGT";

function App() {
  return (
    <Router>
      <div className="fixed top-0 z-10">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Porsche" element={<Porche />} />
        <Route path="/FordGT" element={<FordGT />}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
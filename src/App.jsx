import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/about/About.jsx";
import Team from "./Components/team/Team.jsx";
import Product from "./Components/product/Product.jsx";
import Faq from "./Components/faq/Faq.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-black">

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/faq" element={<Faq/>} />
      </Routes>
      </div>
    </Router>
  
  );
}

export default App;

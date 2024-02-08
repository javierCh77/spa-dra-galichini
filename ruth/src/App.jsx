import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// import pages
import Home from './pages/Home';
import Shifts from './pages/Shifts';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from  './pages/Contact';





function App() {


  return (
    <>
       <Router>
        <Header />
      
        <div className="container mx-auto p-10 rounded  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turnos" element={<Shifts />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />

        
          </Routes>
        </div>
        
        <Footer />
      </Router>

      
    </>
  )
}

export default App
